import { LinkTwitter, SystemCopy } from "@osn/icons/subsquare";
import tw from "tailwind-styled-components";

const ShareIcon = tw.div`
  cursor-pointer
  flex
  justify-center
  items-center
  w-[32px]
  h-[32px]
  rounded-[16px]
  bg-fill-bg-tertiary
`;

const ShareTwitter = () => {
  return (
    <ShareIcon>
      <LinkTwitter className="w-[16px] h-[16px]" />
    </ShareIcon>
  );
};

const CopyLink = () => {
  return (
    <ShareIcon>
      <SystemCopy className="w-[16px] h-[16px]" />
    </ShareIcon>
  );
};

export default function Sharing() {
  return (
    <div className="flex gap-[8px]">
      <ShareTwitter />
      <CopyLink />
    </div>
  );
}
