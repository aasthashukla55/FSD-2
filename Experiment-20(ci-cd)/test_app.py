import pytest
import time
from app import app, db
from sqlalchemy.exc import OperationalError

@pytest.fixture
def client():
    """
    Overriding the client fixture to include a retry loop.
    This handles the window where MySQL is restarting internally.
    """
    app.config['TESTING'] = True
    
    # Retry logic: Try to connect to the DB for up to 10 seconds
    retries = 5
    connected = False
    while retries > 0:
        try:
            with app.app_context():
                db.create_all()
            connected = True
            break
        except OperationalError:
            retries -= 1
            print(f"\nDatabase connection refused. Retrying... ({retries} left)")
            time.sleep(2)
    
    if not connected:
        pytest.fail("Could not connect to MySQL 'db' after 5 retries. Check container logs.")

    yield app.test_client()

    # Cleanup logic to keep the test environment predictable
    with app.app_context():
        db.session.remove()
        db.drop_all()

def test_home(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json == {"message": "Flask MySQL Students CRUD API with Validation Running"}

def test_create_student(client):
    payload = {"name": "Student-1", "age": 20, "uid": "U101"}
    response = client.post("/students", json=payload)
    assert response.status_code == 201
    assert response.json["name"] == "Student-1"

def test_get_students(client):
    response = client.get("/students")
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_get_student(client):
    payload = {"name": "Student-2", "age": 21, "uid": "U102"}
    create_response = client.post("/students", json=payload)
    student_id = create_response.json["id"]

    response = client.get(f"/students/{student_id}")
    assert response.status_code == 200
    assert response.json["name"] == "Student-2"

def test_update_student(client):
    payload = {"name": "Student-3", "age": 22, "uid": "U103"}
    create_response = client.post("/students", json=payload)
    student_id = create_response.json["id"]

    # Testing partial update
    response = client.put(f"/students/{student_id}", json={"name": "Student-3 Updated"})
    assert response.status_code == 200
    assert response.json["name"] == "Student-3 Updated"

def test_delete_student(client):
    payload = {"name": "Student-4", "age": 23, "uid": "U104"}
    create_response = client.post("/students", json=payload)
    student_id = create_response.json["id"]

    response = client.delete(f"/students/{student_id}")
    assert response.status_code == 200

    # Confirm record is gone
    get_response = client.get(f"/students/{student_id}")
    assert get_response.status_code == 404