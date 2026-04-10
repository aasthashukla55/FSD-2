## **Aim**

To design and implement a responsive user registration form using React and Material UI, incorporating real-time and submission-based validation logic.

## **Objectives**

    To implement Controlled Components using the useState hook.

    To utilize MUI components (TextField, Checkbox, Stack, Box) for a professional UI.

    To apply Conditional Rendering for displaying error messages.

    To prevent default browser behavior and handle data validation during the onSubmit event.

    To validate multiple data types including strings (Username/Password), patterns (Email), and booleans (Checkbox).

## **Core Concepts**

Form validation is the process of ensuring that user input meets specific criteria before being processed or sent to a server. In React, this is typically handled through Internal State.
1. Controlled vs. Uncontrolled Components

In this experiment, we use Controlled Components, where React state is the "single source of truth." Every keystroke updates the state, allowing the UI to react instantly (e.g., turning a field red the moment a password is too short).
2. Event Handling and Prevention

By default, HTML forms refresh the page on submission. We use event.preventDefault() to intercept this action, allowing JavaScript to validate the data and provide feedback without losing the current application state.
3. Short-Circuit Evaluation

React allows us to use the && operator to render components dynamically. If the error state is true, the error message component is rendered; otherwise, it is ignored by the DOM.

## **Features implemented**
    *Feature	Validation Logic*	                *UI Feedback*
    Username	Length ≥ 5 characters	        Red border + Helper text
    Email	Valid email syntax	                Red border + Helper text
    Password	Length ≥ 8 characters	        Red border + Helper text
    Terms	Boolean checked === true	        Red Label + FormHelperText

## **Learning Outcomes**

   1. State Synchronization: How to keep UI components in sync with JavaScript logic.

   2. MUI Integration: How to use the error and helperText props to enhance User Experience (UX).

   3. Logical Validation: How to create custom validation functions that trigger based on specific business rules.

   4. UX Best Practices: The importance of preventing invalid form submissions to ensure data integrity.