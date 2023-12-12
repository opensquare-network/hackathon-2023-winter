const { governance: { updateReferendaReferendum } } = require("@open-qf/mongo");

async function handleReferendaVoteFinished(event, indexer) {
  const referendumIndex = event.data[0].toNumber();
  await updateReferendaReferendum(referendumIndex, { isFinal: true });

  // todo: update referendum votes
}

module.exports = {
  handleReferendaVoteFinished,
}
