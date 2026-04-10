## Aim

To test a backend REST API built with Flask using Pytest, ensuring correct functionality of CRUD operations and validating API responses.

## Tools & Technologies
Python
Flask
Pytest
pytest-cov (for coverage reports)

## Theory

Backend testing ensures that API endpoints work correctly and return expected responses.

Flask test client is used to simulate HTTP requests without running a live server
Pytest allows writing test cases using assert statements
Fixtures help in creating reusable test setups

Tested Functionalities
    Create student (POST /students)
    Get all students (GET /students)
    Get student by ID (GET /students/<id>)
    Update student (PUT /students/<id>)
    Delete student (DELETE /students/<id>)
    Home route check (GET /)

Running Tests
-> pytest -v
-> pytest test_app.py
-> pytest test_app.py::test_create_student
->Code Coverage
pytest --cov=app --cov-report=term-missing --cov-report=html

## Learning Outcomes
Understand backend API testing concepts
Write test cases using Pytest
Use Flask test client for request simulation
Test CRUD operations effectively