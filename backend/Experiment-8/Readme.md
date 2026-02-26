## Aim

Build a modular, RESTful API designed to manage student records. This project demonstrates the implementation of full CRUD operations.

## Tech Stack

    Language: Python 3.x

    Framework: Flask

    Testing: Postman

    Deployment: Render

## Features & API Endpoints

The API follows REST standards to manage a student directory using the following endpoints:
Action	      Method	Endpoint	     Description

Create	      POST	    /students	     Register a new student
Read All      GET	    /students	     Retrieve all student records
Read One      GET	    /students/<id>	 Fetch a specific student by ID
Update	      PUT	    /students/<id>	 Modify existing student details
Delete	      DELETE	/students/<id>	 Remove a student from the system

## Core Concepts Applied
Modular Architecture (Blueprints)

To ensure scalability, the project utilizes Flask Blueprints. This allows for a clean separation of concerns by grouping all student-related logic into a dedicated module (student_bp), rather than cluttering the main entry point.
RESTful Standards & JSON

The API communicates exclusively via JSON. It leverages request.get_json() for parsing incoming payloads and jsonify() for structured outbound responses.
State Management

Currently, the application utilizes In-Memory Storage. Data is managed through Python dictionaries and lists.

    Note: As there is no persistent database integrated yet, data will reset upon server restart.

**HTTP Status Codes**

The API implements semantic error handling to provide clear feedback:

    200 OK: Successful operation.

    201 Created: Resource successfully generated.

    400 Bad Request: Validation failure or missing fields.

    404 Not Found: Resource ID does not exist.

## Learning Outcomes

    Dynamic Routing: Extracting and validating data from URL parameters (e.g., <int:student_id>).

    Application State: Managing unique identifiers and global variables within a stateless environment.

    Input Validation: Implementing logic to verify required fields (e.g., "name") before processing requests.

    Deployment: Navigating the workflow of hosting a Python web service on Render.