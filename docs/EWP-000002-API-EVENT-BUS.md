# EWP-000002: API and Event Bus Integration

## Mission

Mobius API accepts founder requests and emits the first platform event.

## Route

POST /requests

## Output

RequestReceived event with:

- requestId
- organizationId
- actorId
- text
- source
- correlationId

## Acceptance Criteria

- Request validation exists.
- Request ID is generated.
- Event name is RequestReceived.
- Event can be forwarded to Mobius Event Bus.
- Command Center can later consume request status.
