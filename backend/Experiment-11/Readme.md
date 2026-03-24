Aim

The primary objective of this experiment is to demonstrate a decoupled microservices architecture. It focuses on how independent services (Customer and Order) communicate over HTTP to aggregate data, simulating a distributed backend system where each service manages its own specific data domain.
Technologies and Frameworks

    Language: Python

    Web Framework: Flask (Lightweight WSGI web application framework)

    HTTP Library: Requests (Used for synchronous service-to-service communication)

    Data Format: JSON (Standard for API responses and inter-service data exchange)

Core Concepts
1. Service Decoupling

Instead of a monolithic database, the application logic is split into two specialized services:

    Customer Service (Port 5001): Responsible for user identity and profile management.

    Order Service (Port 5002): Responsible for transaction history, order details, and status updates.

2. Service-to-Service Communication

The Customer Service acts as an aggregator. When an "Account Details" request is made, the Customer Service fetches the local profile and then performs an internal HTTP GET request to the Order Service to retrieve associated order data.
3. Fault Tolerance and Resiliency

The experiment implements basic network reliability patterns:

    Timeouts: A 3-second timeout is set on internal requests to prevent the Customer Service from hanging if the Order Service is unresponsive.

    Graceful Degradation: If the Order Service is unreachable or returns an error, the Customer Service is programmed to return an empty list of orders rather than failing the entire request.

4. RESTful API Design

    GET: Used for retrieving customer profiles and filtering orders by User ID.

    PUT: Used by the Order Service to handle state changes, specifically updating the status of an existing order via JSON payloads.

Learning Outcomes

    Distributed Architecture: Understanding how to manage multiple web servers running simultaneously on different local ports.

    API Orchestration: Learning how one service can consume the API of another to build a complex response object.

    Data Isolation: Recognizing that each service maintains its own "source of truth" (in-memory dictionaries/lists), mimicking independent databases.

    Error Handling: Mastering the management of HTTP status codes (200, 400, 404) across a network boundary.