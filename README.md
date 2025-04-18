# Setup/Installation instructions

### Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- npm (comes with Node.js)

### 🔧 Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/bryanyzhang/lost-package-chatbot.git
cd lost-package-chatbot
```

2. **Install dependencies**
`npm install`

3. **Run app locally**
`npm start`

4. **The app will open at http://localhost:3000 by default**

# Approach
I chose Task 1: Helping a customer track a lost package because it reflects a common and relatable issue that many users face in the real world. My focus was on creating a clear and intuitive conversation flow that naturally guides users through the process, allowing them to respond in a way that feels familiar and easy to follow. I built the chatbot using React, utilizing useState and useEffect to manage state and user interactions. Users can provide an order number, use their email or phone number, or simply say “I don’t know,” giving them flexibility in how they engage with the bot. I also implemented basic error handling to prompt users when input is invalid or unclear. For the UI, I used a clean, color-coded chat design, with bot messages in blue on the left and user messages in green on the right to mirror the look of a typical messaging app and make the experience feel more natural.

# Examples
![Chatbot inital](./src/screenshots/chatbot-inital.png)
![Chatbot error](./src/screenshots/chatbot-error.png)
![Chatbot finish](./src/screenshots/chatbot-finish.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
