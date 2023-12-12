const {
  chain: { getBlockIndexer },
  scan: { oneStepScan, handleExtrinsics },
  utils: { sleep },
} = require("@osn/scan-common");
const {
  governance: { getGovernanceDb },
} = require("@open-qf/mongo");
const { handleEvents } = require("./events");

async function handleBlock({ block, events, height }) {
  const blockIndexer = getBlockIndexer(block);
  await handleEvents(events, block?.extrinsics, blockIndexer);

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
