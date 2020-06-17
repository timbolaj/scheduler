# Interview Scheduler

The Interview Scheduler is a web application which displays interviews scheduled from noon to 5pm, Monday to Friday. Interacting with a scheduler-api server, users can add, modify and delete appointments.

!["Initial Render"](https://github.com/timbolaj/scheduler/blob/master/docs/Initial-render.png?raw=true)
!["Creating an Appointment"](https://github.com/timbolaj/scheduler/blob/master/docs/Creating-appointment.png?raw=true)
!["Appointment Made"](https://github.com/timbolaj/scheduler/blob/master/docs/Appointment-created.png?raw=true)

## Dependencies

- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-test-renderer

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Stretch Features

The web app uses websockets; allowing multiple users to add, modify and delete appointments from multiple,simultaneously open browsers.