## Aim
To develop and implement RESTful services by implementing three distinct authentication layers within a Flask environment.

## Tools/Technologies

Framework   -  Flask

Api testing -  Postman

Language    -  python


## Core Concepts

Authentication serves as the "digital gatekeeper," ensuring users are who they claim to be. This experiment explores the evolution of this process through three specific methodologies:
1. Basic Authentication (The Traditional Approach)

Basic Auth is the most straightforward method, where the client transmits a Base64-encoded string containing the username and password in the Authorization header.

    Mechanism: Every request includes the credentials.

    Security Note: While easy to implement, it is vulnerable if not used over an encrypted (HTTPS) connection.

    Implementation: The /basic-protected route cross-references these headers against a local user database.

2. Simple Token-Based Authentication (The Custom Approach)

To avoid sending raw passwords repeatedly, this method uses a "keyed" access system.

    Workflow: The user logs in once via /token-login and receives a custom-generated token (Base64-encoded identifier).

    Usage: The client provides this token in a custom x-auth-token header for subsequent requests to /token-protected.

3. JSON Web Token (JWT) Authentication (The Modern Standard)

JWTs are the industry standard for stateless, scalable security. A JWT is a digitally signed string that allows the server to verify the user’s identity without needing to store session data.

    Structure: Comprised of a Header (algorithm info), Payload (user data), and Signature (security verification).

    Implementation: We utilize the Flask-JWT-Extended library. Users receive a token via /jwt-login and must present it as a Bearer token in the Authorization header to access /jwt-protected.


## Learning Outcomes

    Header Manipulation: Manually handling HTTP headers for security.

    Token Lifecycle: Managing the generation, transmission, and validation of access tokens.

    Stateless Architecture: Understanding why JWTs are preferred for high-traffic, distributed systems compared to traditional session-based methods.

    Flask Integration: Applying decorators like @jwt_required() to enforce access control logic cleanly.