import { Header as CommonHeader } from "@osn/common-ui";
import Connect from "../connect";
import Link from "next/link";

export default function Header() {
  return (
    <CommonHeader logoRender={(logo) => <Link href={"/"}>{logo}</Link>}>
      <div className="flex justify-between items-center grow">
        <div className="flex items-center">
          <img src="/icons/openqf.svg" />
          <span className="ml-3 text18semibold">OpenQF</span>
        </div>

        <Connect />
      </div>
    </CommonHeader>
  );
}
