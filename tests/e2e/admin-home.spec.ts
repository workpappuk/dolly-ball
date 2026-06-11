import { expect, test } from "@playwright/test";

test("admin home page renders platform heading", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "SportOS Admin Portal" })).toBeVisible();
  await expect(page.getByText("Enterprise white-label sports control plane.")).toBeVisible();
});
