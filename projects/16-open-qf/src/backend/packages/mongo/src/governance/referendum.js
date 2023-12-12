const { getReferendaReferendumCol } = require("./db");
const isEmpty = require("lodash.isempty");

async function insertReferendaReferendum(obj = {}) {
  const { index } = obj;
  const col = await getReferendaReferendumCol();
  const maybeInDb = await col.findOne({ index });
  if (maybeInDb) {
    return
  }

  await col.insertOne(obj);
}

async function updateReferendaReferendum(index, updates = {}) {
  let update = isEmpty(updates) ? null : { $set: updates };
  if (isEmpty(update)) {
    return;
  }

  const col = await getReferendaReferendumCol();
  await col.updateOne({ index }, update);
}

module.exports = {
  insertReferendaReferendum,
  updateReferendaReferendum,
}
