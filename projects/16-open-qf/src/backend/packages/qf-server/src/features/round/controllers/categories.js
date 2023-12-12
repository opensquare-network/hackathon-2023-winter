const { category } = require("../../../utils/consts/category");

async function getCategories(ctx) {
  ctx.body = Object.entries(category).map(([id, display]) => ({ id, display }));
}

module.exports = {
  getCategories,
};
