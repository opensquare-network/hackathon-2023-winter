import { useCallback } from "react";
import SocialLinkItem from "./socialLinkItem";
import { setCookie } from "@osn/common";
import { CookieNames } from "@/utils/cookies";

const SOCIAL_LINK_GITHUB = {
  icon: "",
  power: 10,
  title: "GitHub",
  description: "Verify your code contributions",
};

export default function GitHubConnect() {
  const onConnect = useCallback(() => {
    // Create OAuth state, and save to cookie, expire in 9 minutes
    const state = Math.random().toString(36).substring(2, 9);
    setCookie(CookieNames.GITHUB_OAUTH_STATE, state, 0.00625);

    window.open(
      `https://github.com/login/oauth/authorize?client_id=${
        process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID
      }&redirect_uri=${encodeURIComponent(
        process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI,
      )}&state=${state}`,
      "_blank",
    );
  }, []);

  return <SocialLinkItem item={SOCIAL_LINK_GITHUB} onClick={onConnect} />;
}
