" Intuitive Quiz Hub "

# Overview

Intuitive Quiz Hub is a web-based quiz application that allows users to test their knowledge on various topics. It features multiple-choice questions fetched from an external API and provides an interactive user experience with gamification elements.

# Features

=> User Input: Users can enter their name before starting the quiz.

=> Category Selection: Users can choose from multiple quiz categories.

=> Difficulty Levels: Users can select Easy, Medium, or Hard difficulty levels.

=> Real-Time Score Update: Users' scores update dynamically based on their answers.

=> Intuitive UI: Responsive design with a smooth quiz experience.

=> Error Handling: Provides appropriate error messages for missing selections.

=> Navigation: Users can move to the next question or quit anytime.

# Tech Stack

=> Frontend: React.js

=> Styling: CSS, Material UI

=> Data Fetching: Axios

=> Routing: React Router

# Installation

Prerequisites:

=> Node.js and npm installed

Steps to run the project:

=> Clone the repository:

git clone <repository_url>

=> Navigate to the project folder:

cd quiz-app

=> Install dependencies:

npm install

=> Start the development server:

npm start

Open http://localhost:3000 in your browser.

# API Endpoint

=> The quiz questions are fetched from Open Trivia Database using the following API:

https://opentdb.com/api.php?amount=10&category=<category_id>&difficulty=<difficulty_level>&type=multiple

# Project Structure

quiz-app/
│── src/
│   │── components/
│   │   ├── ErrorMessage/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Question/
│   │── Pages/
│   │   ├── Home/
│   │   ├── Quiz/
│   │   ├── Result/
│   │── Data/
│   │── App.js
│   │── index.js
│── public/
│── package.json

# Future Enhancements

=> Add a timer for each question.

=> Implement a leaderboard feature.

=> Improve UI with animations.

# Contact

=> For any queries, reach out to Utkarsh Singh at singhutkarsh919@gmail.com






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
