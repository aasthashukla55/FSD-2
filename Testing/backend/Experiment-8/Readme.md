## 1. Aim

To design, implement, and execute unit and integration tests for a RESTful Flask API using the Pytest framework to ensure endpoint reliability and code coverage.
## 2. Tools & Technologies

    Language: Python 3.10+

    Framework: Flask (The application being tested)

    Testing Tool: pytest (Core testing framework)

    Coverage Tool: pytest-cov (For analyzing code execution paths)

    Virtual Environment: venv (For dependency isolation)

## 3. Theory

Unit Testing in web development involves testing individual components or routes in isolation. In a Flask context, we use a test client—a simulated browser—that allows us to send GET, POST, PUT, and DELETE requests to our application without actually running a live server.

Key Concepts:

    Fixtures: Use the @pytest.fixture decorator to create reusable components. In this experiment, the client() fixture initializes the Flask app in testing mode, providing a fresh instance for every test function.

    Assertions: These are boolean expressions that check if the API response (status code, JSON data) matches the expected outcome.

    Code Coverage: A metric used to measure the percentage of the source code executed during testing. High coverage reduces the likelihood of undetected bugs in edge cases.

## 4. Test Implementation Details
Test Function	HTTP Method	Expected Status	Purpose
test_home	GET	200 OK	Verifies the root health-check endpoint is active.
test_create_student	POST	201 Created	Validates resource creation and JSON payload handling.
test_get_students	GET	200 OK	Ensures the collection endpoint returns a list.
test_update_student	PUT	200 OK	Tests state changes by modifying an existing resource.
test_delete_student	DELETE	200 OK	Confirms resource removal and 404 handling for missing items.

## 5. Execution Commands
Bash

# Run all tests with verbose output
pytest -v

# Generate a coverage report in the terminal
pytest --cov=app --cov-report=term-missing

## 6. Learning Outcomes

1.     Environment Configuration: Understood how to configure a Flask application for a testing environment using app.testing = True.

2.    REST Validation: Gained hands-on experience in validating CRUD (Create, Read, Update, Delete) operations via automated scripts.

 3.   State Management: Learned how to handle dependencies between tests (e.g., creating a student before attempting to delete it).

 4.   Quality Assurance: Mastered the use of coverage reports to identify "blind spots" in backend logic, ensuring a more robust and production-ready application.