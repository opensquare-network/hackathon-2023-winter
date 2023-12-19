const {
  qf: { insertGithubUser },
} = require("@open-qf/mongo");

async function createGithubUser(ctx) {
  const user = ctx.request.body;
  await insertGithubUser(user);
  ctx.body = {
    success: true,
  };
}

module.exports = {
  createGithubUser,
};
