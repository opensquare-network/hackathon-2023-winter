import tw from "tailwind-styled-components";
import { Button } from "@/components/button";

const Content = tw.div`flex flex-col gap-[16px]`;

const Info = ({ title, value }) => {
  return (
    <div className="flex flex-col gap-[4px] items-center">
      <span className="text14medium text-text-tertiary">{title}</span>
      <span className="text24bold ntext-text-primary">{value}</span>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="w-full p-[32px] shadow-shadow-card-default">
      <div className="flex flex-col gap-[20px] items-center">
        <Content>
          <Info title="Total Raised" value="123.45 DOT" />
          <Info title="Contributors" value="4" />
        </Content>
        <Button className="w-full">Donate</Button>
      </div>
    </div>
  );
}
