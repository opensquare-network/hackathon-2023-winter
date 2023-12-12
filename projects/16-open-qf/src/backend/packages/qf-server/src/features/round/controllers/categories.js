const {
  qf: { getProjectCol },
} = require("@open-qf/mongo");

async function getCategories(ctx) {
  const col = await getProjectCol();
  ctx.body = await col.distinct("category");
}

module.exports = {
  getCategories,
};
