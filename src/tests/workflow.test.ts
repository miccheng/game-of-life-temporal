import { describe, expect, it, afterEach, beforeEach } from "vitest";
import { TestWorkflowEnvironment } from "@temporalio/testing";
import { Worker } from "@temporalio/worker";
import { example } from "../workflows";
import * as activities from "../activities";

describe("Workflow", async () => {
  let testEnv: TestWorkflowEnvironment;

  beforeEach(async () => {
    console.log("Starting test environment");
    testEnv = await TestWorkflowEnvironment.createTimeSkipping();
    console.log("Test environment started");
  });

  afterEach(async () => {
    await testEnv?.teardown();
  });

  it("#Workflow", async () => {
    const taskQueue = "test";

    const worker = await Worker.create({
      connection: testEnv.nativeConnection,
      taskQueue,
      workflowsPath: require.resolve("../workflows.ts"),
      activities,
    });
    console.log("Worker created");

    console.log("Executing workflow");
    const result = await worker.runUntil(
      testEnv.client.workflow.execute(example, {
        args: ["Temporal"],
        workflowId: "test",
        taskQueue,
      })
    );

    expect(result).equals(
      "Hello, Temporal!",
      `Result is not as expected: ${result}`
    );
    console.log("Result is", result);
  });
});
