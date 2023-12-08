import { USER_INFO, USER_POWER } from "@/fixtures/user";
import { cn } from "@/utils";
import { addressEllipsis } from "@osn/common";
import { PieChart } from "react-minimal-pie-chart";

export default function UserInfo() {
  return (
    <div className="space-y-5">
      <div className="flex gap-5 justify-between">
        <div>
          <div>avatar</div>
          <div className="mt-4 text-text-primary text24bold">
            {addressEllipsis(USER_INFO.address)}
          </div>
          <div className="mt-1 text14medium text-text-tertiary">
            {addressEllipsis(USER_INFO.address)}
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

function QFpowerPie({ className = "", percentage = 0 }) {
  const data = [
    {
      value: 100 - percentage,
      color: "var(--fill-bg-quaternary)",
    },
    {
      value: percentage,
      color: "var(--fill-bg-brand-secondary)",
    },
  ];

  return (
    <div className={cn("relative", className)}>
      <div className="w-full overflow-hidden">
        <PieChart
          // mirrored
          className={"scale-x-[-1]"}
          center={[50, 50]}
          rounded
          lineWidth={15}
          data={data}
          startAngle={-180}
          lengthAngle={180}
        />
      </div>

      <div className="text-center space-y-1 absolute bottom-4 w-full">
        <div className="text-text-primary text24bold">
          {percentage?.toFixed(2)}
        </div>
        <div className="text14medium text-text-tertiary">QFpower</div>
      </div>
    </div>
  );
}
