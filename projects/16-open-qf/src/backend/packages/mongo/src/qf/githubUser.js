const { getGithubUserCol } = require("./db");

async function insertGithubUser(data = {}) {
  const { address } = data;
  const col = await getGithubUserCol();
  await col.updateOne({ address }, { $set: data }, { upsert: true });
}

module.exports = {
  insertGithubUser,
};
