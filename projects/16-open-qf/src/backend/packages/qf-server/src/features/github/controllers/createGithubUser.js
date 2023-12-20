const {
  qf: { insertGithubUser },
} = require("@open-qf/mongo");
const { getGithubUserCol } = require("@open-qf/mongo/src/qf");
const { HttpError } = require("../../../utils/httpError");
const { checkSignature } = require("../../../utils/checkSignature");

async function createGithubUser(ctx) {
  const { address, signature, user } = ctx.request.body;

  const col = await getGithubUserCol();
  const dbUser = await col.findOne({ address });
  if (!dbUser) {
    throw new HttpError(404, "User not found");
  }
  const { challenge } = dbUser;

  await checkSignature(challenge, signature, address);
  await insertGithubUser({ address, signature, user });
  ctx.body = {
    success: true,
  };
}

module.exports = {
  createGithubUser,
};
