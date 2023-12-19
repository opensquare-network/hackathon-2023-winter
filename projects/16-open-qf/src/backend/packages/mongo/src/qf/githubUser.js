const { getGithubUserCol } = require("./db");

async function insertGithubUser(user = {}) {
  const { id } = user || {};
  const col = await getGithubUserCol();
  await col.updateOne({ id }, { $set: user }, { upsert: true });
}

module.exports = {
  insertGithubUser,
};
