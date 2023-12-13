const {
  chain: { getBlockIndexer },
  scan: { oneStepScan, handleExtrinsics },
  utils: { sleep },
} = require("@osn/scan-common");
const {
  governance: { getGovernanceDb },
} = require("@open-qf/mongo");
const { handleEvents } = require("./events");
const { handleCalls } = require("./calls");
const { updateUnFinalReferendaVotes } = require("./jobs/referenda/votes");
const { clearConvictionDelegationMark } = require("../store/blockConvictionDelegation");
const { clearConvictionVoteHeight } = require("../store/convictionVote");

async function handleBlock({ block, events, height }) {
  const blockIndexer = getBlockIndexer(block);
  await handleExtrinsics(block.extrinsics, events, blockIndexer, handleCalls);
  await handleEvents(events, block?.extrinsics, blockIndexer);

  await updateUnFinalReferendaVotes(blockIndexer);

  clearConvictionDelegationMark(blockIndexer.blockHeight);
  clearConvictionVoteHeight(blockIndexer.blockHeight);

  const db = getGovernanceDb();
  await db.updateScanHeight(height);
}

async function scan() {
  const db = getGovernanceDb();
  let toScanHeight = await db.getNextScanHeight();

  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
  while (true) {
    toScanHeight = await oneStepScan(toScanHeight, handleBlock);
    await sleep(1);
  }
}

module.exports = {
  scan,
  handleBlock,
}
