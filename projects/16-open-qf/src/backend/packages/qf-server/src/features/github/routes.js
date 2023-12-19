const Router = require("koa-router");
const { createGithubUser } = require("./controllers/createGithubUser");
const router = new Router();

router.post("/github/users", createGithubUser);

module.exports = router;
