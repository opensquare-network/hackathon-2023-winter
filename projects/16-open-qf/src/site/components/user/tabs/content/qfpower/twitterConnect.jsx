import SocialLinkItem from "./socialLinkItem";

const SOCIAL_LINK_TWITTER = {
  icon: "",
  power: 10,
  title: "X/Twitter",
  description: "Verify your social media presence",
};

export default function TwitterConnect() {
  return <SocialLinkItem item={SOCIAL_LINK_TWITTER} />;
}
