This is a template project for creating a new React web app. At its base, it was set up with [Create React App](https://github.com/facebook/create-react-app). A few useful modules were added on top, along with some example code leveraging them.

## Making a copy

### Fork

If you don't care about your copy being linked back to this repo, you can just fork it.

### Copy

This is a good option if you (1) don't want your new repo to be linked back to this one and (2) don't care about the repo history.

First, create a new repo in GitHub. Then:

```shell
git clone <this repo url>
cd react-web-app-template
rm -rf .git
git init
git add .
git commit -m "First commit"
git remote add origin <new repo url>
git push -u origin master
```

You'll probably also want to rename the folder you created when you cloned the repo to whatever the name of the new project is.

### Copy with git history

If you want to retain the git history, you can do the following.

First, create a new repo in GitHub. Then:

```shell
git clone --bare <this repo url>
cd react-web-app-template.git
git push --mirror <new repo url>
cd ..
rm -rf old-repository.git
```

To start working with your new repo, just clone as normal.

## Dependencies

The following's been added on top of what's included with Create React App:

* Material UI
  * `@material-ui/core`
  * `@material-ui/icons`
  * `typeface-roboto`
* React Router
  * `react-router-dom`
* Redux
  * `redux`
  * `react-redux`
  * `redux-thunk`
* Utilities
  * `isomorphic-fetch`
  * `lodash`

## Common commands

Before starting up, make sure to `npm install`.

### `npm start`

Run the app in the development mode. Includes linting and automatic reloading.

### `npm test`

Run tests in watch mode..

### `npm run build`

Builds the app for production to the `build` folder.

### Additional notes

Refer to the [Create React App Guide](https://create-react-app.dev/) for additional command and notes on how to manage the app.

To detach from Create React App, see the [guidance on ejecting](https://create-react-app.dev/docs/available-scripts#npm-run-eject).
