import { useCallback } from "react";
import SocialLinkItem from "./socialLinkItem";
import { nextApi } from "@/services";
import { useAccount } from "@/context/account";
import { signMessage } from "@/utils/signature";

const SOCIAL_LINK_GITHUB = {
  image: "/brand/github.svg",
  power: 10,
  title: "GitHub",
  description: "Verify your code contributions",
};

export default function GitHubConnect() {
  const account = useAccount();
  const address = account?.address;

  const onConnect = useCallback(async () => {
    const { result } = await nextApi.post("github/users/connect", {
      address,
    });
    if (!result) {
      return;
    }

    const { challenge } = result;
    const signature = await signMessage(challenge, address);
    const state = `${address},${signature}`;
    console.log(state);

    window.open(
      `https://github.com/login/oauth/authorize?client_id=${
        process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID
      }&redirect_uri=${encodeURIComponent(
        process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI,
      )}&state=${encodeURIComponent(state)}`,
      "_blank",
    );
  }, [address]);

  return <SocialLinkItem item={SOCIAL_LINK_GITHUB} onClick={onConnect} />;
}
