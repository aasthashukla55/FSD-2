## Aim

To test a React form component using Vitest and React Testing Library, ensuring correct rendering, validation, and form submission behavior.

## Tools & Technologies
JavaScript / React
Vitest
React Testing Library
Material UI

## Theory

Frontend testing ensures that UI components behave correctly and respond to user interactions as expected.

React Testing Library is used to render components and interact with DOM elements
Vitest provides a fast testing environment similar to Jest
render() mounts the component in a virtual DOM
screen is used to query elements
fireEvent simulates user interactions like typing and clicking
vi.spyOn() is used to mock functions such as window.alert

Tested Functionalities
    Rendering of input fields (username, email, password)
    Presence of submit button and checkbox
    Email validation error handling
    Password length validation
    Successful form submission with valid inputs
    Alert message verification
    Running Tests
    npm run test
        or
    npx vitest

## Learning Outcomes
Understand frontend component testing
Write test cases using Vitest
Use React Testing Library for DOM testing
Simulate user interactions using fireEvent