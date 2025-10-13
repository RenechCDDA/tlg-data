import run from "./pull-data.mjs";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

await run({
  github: octokit,
  context: {
    repo: { owner: "RenechCDDA", repo: "tlg-data" },
  },
  dryRun: !process.env.GITHUB_TOKEN,
});
