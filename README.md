# This is web app is created to enhance accessibility features to users who have dyslexia. If the users lose focus, as stated in challenge #4, they can switch to text-to-speech within the app. The app also includes copy/paste feature where users can copy a part (a paragraph) or all of the text from a document and paste it to the editor in the app to modify the font or use text-to-speech. The camera capture is an optional feature for mobile devices or other devices that have a back camera to take a picture of text in a document from other devices to this app (then it converts to plain text) for the users to use. The app also includes image upload if any text from images need to be retrieved.

## Core Features
1) Image-to-text conversion system
2) Text-to-speech conversion system
3) Font modifiers **(font-weight, font-size, and font-family : selected based on their design, height, weight and shape)**
4) Image-upload

## Dependencies/Libraries used
1) react-speech (https://www.npmjs.com/package/react-speech)
2) react-webcam (https://www.npmjs.com/package/react-webcam)
3) tesseract.js (https://tesseract.projectnaptha.com)

## Optimization/features that currently need to be done to make the app better
1) autocorrect spelling when converting from image to text
2) Make the app responsive on mobile devices
3) add more font styles that are more readable to users with dyslexia
4) add pause/resume buttons to text-to-speech button
5) add a feature where highlighted text is only read
6) make chrome-extension so that the text-to-speech and editing fonts can be done across all webpages
7) add pdf/word upload system so that the accessibility features can be used on the documents


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
