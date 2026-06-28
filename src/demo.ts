import { acceptFounderRequestWithEvent } from "./index.js";

const acceptance = acceptFounderRequestWithEvent({
  organizationId: "mobius-technologies",
  actorId: "founder-michael-bell",
  text: "Create a Platform Change Proposal to add Founder Mode."
});

console.log(JSON.stringify(acceptance, null, 2));
