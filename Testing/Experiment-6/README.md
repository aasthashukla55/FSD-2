
### 1. Aim
Create form using MUI components

### 2. Theory
* **React & Vite**: A fast development environment for building component-based User Interfaces.
* **Material UI (MUI)**: A library of pre-designed React components that follow Google's Material Design guidelines.
* **Form Validation**: 
    * **Email Logic**: Ensuring the presence of the `@` symbol to maintain data integrity.
    * **Password Logic**: Enforcing a minimum length (6 characters) for basic security.


### 3. Implementation Steps
1.  **Project Setup**: Initialized the project using Vite and installed MUI libraries.
2.  **Routing**: Organized the `src/pages` folder with `Home.jsx`, `About.jsx`, and `Dashboard.jsx`.
3.  **UI Design**: Integrated MUI `TextField`, `Checkbox`, and `Rating` components into the form.
4.  **Validation Logic**: 
    * Created state variables for form inputs and error messages.
    * Implemented a `handleSubmit` function to check if the email contains `@` and if the password is ≥ 6 characters.
5.  **Visual Feedback**: Utilized MUI's `error` and `helperText` props to highlight invalid fields in red.
6.  **Submission**: Configured the `Button` to only log data if all validation criteria are met.

### 4. Learning Outcomes
* Learned to integrate **MUI** into a Vite-React project.
* Mastered handling multiple input types (Text, Checkbox, Rating) in a single state object.
* Gained experience in organizing a clean project structure with separate pages and components.

### 5. Conclusion
The experiment was successful. The application effectively manages user input and prevents the submission of incorrect data through client-side validation. The use of MUI significantly improved the UI/UX compared to standard HTML elements.

