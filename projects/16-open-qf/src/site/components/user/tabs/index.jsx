import { Tabs } from "@osn/common-ui";
import { useState } from "react";

export default function UserTabs() {
  const items = [
    {
      value: "QFpower",
    },
    {
      value: "Contributions",
      suffix: 2,
    },
    {
      value: "Projects",
      suffix: 3,
    },
  ];
  const [value, setValue] = useState(items[0].value);

  return (
    <div className="flex">
      <Tabs items={items} value={value} setValue={setValue} />
    </div>
  );
}
