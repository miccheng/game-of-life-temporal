import { proxyActivities } from "@temporalio/workflow";
// Only import the activity types
import type * as activities from "./activities";

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: "1 minute",
});

/** A workflow that simply calls an activity */
export const example = async (name: string): Promise<string> =>
  await greet(name);
