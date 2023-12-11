import { USER_INFO, USER_POWER } from "@/fixtures/user";
import Avatar from "../../accountSelector/avatar";
import Copy from "../../copy";
import IdentityOrAddr from "../identityOrAddr";
import QFpowerPie from "./qfpowerPie";

export default function UserInfo() {
  return (
    <div className="space-y-5">
      <div className="flex gap-5 justify-between">
        <div>
          <div>
            <Avatar address={USER_INFO.address} size={64} />
          </div>
          <div className="mt-4 text-text-primary text24bold">
            <IdentityOrAddr
              noLink
              noIcon
              className="[&_*]:!text24bold"
              address={USER_INFO.address}
            />
          </div>
          <div className="mt-1 text14medium text-text-tertiary flex items-center">
            <IdentityOrAddr
              noLink
              noIcon
              className="[&_*]:!text14medium"
              address={USER_INFO.address}
            />
            <Copy text={USER_INFO.address} className="ml-1" />
          </div>
        </div>
        <QFpowerPie
          className="w-52 h-36 py-2.5"
          percentage={USER_POWER.score}
        />
      </div>
      <div className="flex items-center">
        <Item title="Contributions"></Item>
        <Item title="Project"></Item>
      </div>
    </div>
  );
}

function Item({ title, children }) {
  return (
    <div className="space-y-1">
      <div className="text16semibold text-text-primary">{title}</div>
      <div>{children}</div>
    </div>
  );
}
