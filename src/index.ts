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

export function getHealth(): ApiHealth {
  return {
    service: "mobius-api",
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "0.1.0"
  };
}

export function acceptFounderRequest(input: FounderRequestInput): FounderRequestResult {
  if (!input.organizationId || !input.actorId || !input.text.trim()) {
    throw new Error("organizationId, actorId, and text are required");
  }

  return {
    requestId: "req-" + Date.now(),
    status: "accepted",
    nextEvent: "RequestReceived"
  };
}
