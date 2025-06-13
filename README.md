# Employee Polls App

## Overview
The Employee Polls app is a React and Redux-based application that allows users to log in, vote on polls, create new polls, and view a leaderboard of users based on their activity. The app leverages Redux for state management and provides a simple login and impersonation system using pre-existing user data.

See Deployment here:

https://employee-polls-web-app-git-master-chrisbraycodes-projects.vercel.app/

## Features
- User authentication and impersonation.
- Ability to view answered and unanswered polls.
- Ability to vote on polls.
- Form to create new polls.
- Leaderboard showing users ranked by their participation.
- Protected routes for authenticated users.

## Technologies Used
- **React**
- **Redux**
- **React Router**
- **Jest & Testing Library** for unit tests

## Installation Instructions
1. Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd employee-polls
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

4. Run tests:
    ```bash
    npm run test
    ```

## Usage
- On launch, the app will prompt you to log in by selecting a user.
- Once logged in, you can:
  - View unanswered polls.
  - Answer polls by selecting an option.
  - Create new polls.
  - View the leaderboard.
- Log out to switch users.

## Project Structure
