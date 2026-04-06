## Aim

To establish a connection between a Python Flask backend and a MySQL database (hosted on Aiven) and implement a RESTful API capable of performing CRUD (Create, Read, Update, Delete) operations with integrated data validation.

## Tools and Technologies

    Backend Framework: Flask

    ORM: Flask-SQLAlchemy (SQLAlchemy)

    Database: MySQL (Cloud-hosted via Aiven)

    Data Validation: Marshmallow

    Database Driver: PyMySQL

    Environment Management: python-dotenv

## Theory
1. Object-Relational Mapping (ORM)

ORM is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. SQLAlchemy acts as the bridge, allowing us to interact with MySQL tables as Python classes (Student model) without writing raw SQL.
2. Data Validation

Validation ensures that the data entering the database meets specific criteria (e.g., age must be a positive integer). Marshmallow is used to define a StudentSchema that checks data types and constraints before the database logic is executed.
3. Database Connectivity

To connect to a managed service like Aiven, a Connection String is required. The format used is:
mysql+pymysql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>

## API Endpoints

| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| GET    | `/`               | Health check / Home |
| POST   | `/students`       | Create a new student record (Validated) |
| GET    | `/students`       | Retrieve a list of all students |
| GET    | `/students/<id>`  | Retrieve a specific student by ID |
| PUT    | `/students/<id>`  | Update an existing student (Partial validation allowed) |
| DELETE | `/students/<id>`  | Remove a student record from the database |

## Learning Outcomes

    Database Integration: Successfully configured connection parameters for a remote Aiven MySQL instance.

    Schema Enforcement: Implemented Marshmallow schemas to prevent invalid data entry and handle 400 Bad Request errors gracefully.

    RESTful Design: Developed a standard API structure following HTTP method conventions for data persistence.

    Environment Security: Utilized .env files to manage sensitive database credentials, keeping them out of the source code.