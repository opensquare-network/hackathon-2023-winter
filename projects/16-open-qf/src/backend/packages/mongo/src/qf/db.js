const {
  mongo: { ScanDb }, env: { getEnvOrThrow },
} = require("@osn/scan-common");
const { tags } = require("@open-qf/qf-server/src/scripts/mock/tags");

let db = null;

let roundCol = null;
let projectCol = null;
let projectCommentCol = null;
let contributorCol = null;
let tagCol = null;

async function initQfServerDb() {
  db = new ScanDb(getEnvOrThrow("MONGO_QF_SERVER_URL"), getEnvOrThrow("MONGO_QF_SERVER_NAME"));
  await db.init();

  roundCol = await db.createCol("round");
  projectCol = await db.createCol("project");
  projectCommentCol = await db.createCol("projectComment");
  contributorCol = await db.createCol("contributor");
  tagCol = await db.createCol("tag");
  _createIndexes().then(() => console.log("DB indexes created!"));
}

async function _createIndexes() {
  if (!db) {
    console.error("Please call initDb first");
    process.exit(1);
  }

  await tagCol.createIndex({ id: 1 }, { unique: true });
}

async function makeSureInit(col) {
  if (!col) {
    await initQfServerDb();
  }
}

async function getRoundCol() {
  await makeSureInit(roundCol);
  return roundCol;
}

async function getProjectCol() {
  await makeSureInit(projectCol);
  return projectCol;
}

async function getProjectCommentCol() {
  await makeSureInit(projectCommentCol);
  return projectCommentCol;
}

async function getContributorCol() {
  await makeSureInit(contributorCol);
  return contributorCol;
}

async function getTagCol() {
  await makeSureInit(tagCol);
  return tagCol;
}

function getQfServerDb() {
  return db;
}

module.exports = {
  getQfServerDb, getRoundCol, getProjectCol, getProjectCommentCol, getContributorCol, getTagCol,
};
