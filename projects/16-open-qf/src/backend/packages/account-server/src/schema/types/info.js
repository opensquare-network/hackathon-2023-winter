const addressInfo = /* GraphQL */ `
  type AddressInfo {
    isTipFinder: Boolean!
    isTipBeneficiary: Boolean!
    isProposalBeneficiary: Boolean!
    isBountyBeneficiary: Boolean!
    isBountyCurator: Boolean!
    fellowshipRank: Int
    isValidator: Boolean!
    hasVerifiedIdentity: Boolean!
  }
`;

module.exports = {
  addressInfo,
}
