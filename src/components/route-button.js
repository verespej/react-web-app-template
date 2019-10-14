import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";

// Note: From material-ui docs, React.forwardRef will no longer be required with react-router-dom v6.
// See https://material-ui.com/guides/composition/#routing-libraries.
const ForwardRefLink = React.forwardRef((props, ref) => <Link innerRef={ref} { ...props } />);

export function RouteButton(props) {
  return (
    <Button component={ ForwardRefLink } { ...props } />
  );
}
