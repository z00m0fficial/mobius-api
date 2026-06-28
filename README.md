# Mobius API

Unified API gateway for the Mobius Organizational Intelligence Operating System.

## Mission

Provide one public API surface for Mobius applications, services, SDKs, and future integrations.

## Enterprise Alpha Routes

- `GET /health`
- `POST /requests`
- `GET /requests/:id`
- `GET /events`
- `GET /metrics`
- `GET /memory`

## Rule

External clients should access Mobius through Mobius API rather than calling internal services directly.
