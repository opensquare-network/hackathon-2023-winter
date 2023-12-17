require("dotenv").config();

const { round1 } = require("./round");
const { projects } = require("./projects");
const { qf: { insertRound, insertProject, getTagCol } } = require("@open-qf/mongo");
const { saveMockContributors } = require("./address/contributors");
const { tags } = require("./tags");

async function insertProjects() {
  let id = 1;
  for (const project of projects) {
    await insertProject({
      id,
      roundId: round1.id,
      ...project,
    });

    id++;
  }
}

async function insertTags() {
  const col = await getTagCol();
  const bulk = col.initializeUnorderedBulkOp();
  for (const tag of tags) {
    bulk.insert(tag);
  }
  await bulk.execute();
}

;(async () => {
  await insertRound(round1);
  await insertProjects();
  await saveMockContributors();
  await insertTags();

  process.exit(0);
})();
