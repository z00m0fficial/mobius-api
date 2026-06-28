export interface ApiHealth {
  service: string;
  status: "healthy" | "degraded" | "down";
  timestamp: string;
  version: string;
}

export interface FounderRequestInput {
  organizationId: string;
  actorId: string;
  text: string;
}

export interface FounderRequestResult {
  requestId: string;
  status: "accepted";
  nextEvent: "RequestReceived";
}

export interface RequestReceivedEvent {
  id: string;
  name: "RequestReceived";
  version: "1.0";
  timestamp: string;
  source: "mobius-api";
  organizationId: string;
  correlationId: string;
  payload: {
    requestId: string;
    actorId: string;
    text: string;
  };
}

export interface FounderRequestAcceptance {
  result: FounderRequestResult;
  event: RequestReceivedEvent;
}

export function getHealth(): ApiHealth {
  return {
    service: "mobius-api",
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "0.1.0"
  };
}

export function acceptFounderRequest(input: FounderRequestInput): FounderRequestResult {
  return acceptFounderRequestWithEvent(input).result;
}

export function acceptFounderRequestWithEvent(input: FounderRequestInput): FounderRequestAcceptance {
  const text = input.text.trim();

  if (!input.organizationId || !input.actorId || !text) {
    throw new Error("organizationId, actorId, and text are required");
  }

  const requestId = "req-" + Date.now();
  const correlationId = "corr-" + requestId;

  return {
    result: {
      requestId,
      status: "accepted",
      nextEvent: "RequestReceived"
    },
    event: {
      id: "evt-" + requestId,
      name: "RequestReceived",
      version: "1.0",
      timestamp: new Date().toISOString(),
      source: "mobius-api",
      organizationId: input.organizationId,
      correlationId,
      payload: {
        requestId,
        actorId: input.actorId,
        text
      }
    }
  };
}
