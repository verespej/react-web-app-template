const registeredActionTypes = [];

export const REQUEST_STATUS_ERROR = 'Error';
export const REQUEST_STATUS_FULFILLED = 'Fulfilled';
export const REQUEST_STATUS_PENDING = 'Pending';
export const REQUEST_STATUS_UNINITIATED = 'Uninitiated';

export function createActionCreator(type, ...requiredProperties) {
  if (typeof type !== 'string') {
    throw new Error(`Expected "type" to be a string, but got: ${typeof type}`);
  }
  if (registeredActionTypes.includes(type)) {
    throw new Error(`An action creator was already created for type: ${type}`);
  }
  requiredProperties.forEach(requiredProperty => {
    if (typeof requiredProperty !== 'string') {
      throw new Error(`Expected "requiredProperties" to contain strings, but got a: ${typeof requiredProperty}`);
    }
    if (requiredProperty === 'type') {
      throw new Error('"type" is a reserved property');
    }
  });

  registeredActionTypes.push(type);

  return {
    create: properties => {
      if (typeof properties !== 'object' || Array.isArray(properties)) {
        throw new Error('"properties" must be a non-array object');
      }

      const incomingKeys = Object.keys(properties)
      requiredProperties.forEach(requiredKey => {
        if (!incomingKeys.includes(requiredKey)) {
          throw new Error(`Missing required property: ${requiredKey}`);
        }
      });
      incomingKeys.forEach(incomingKey => {
        if (!requiredProperties.includes(incomingKey)) {
          throw new Error(`Unexpected unrequired property: ${incomingKey}`);
        }
      });

      return {
        type,
        ...properties,
      };
    },
    type,
  };
}

export function createRequestStatusActionCreator(type) {
  return createActionCreator(
    type,
    'requestStatus',
    'details',
  );
}
