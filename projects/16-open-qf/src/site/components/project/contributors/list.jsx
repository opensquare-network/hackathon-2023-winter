import NetworkUser from "@/components/user/networkUser";
import { useServerSideProps } from "@/context/serverSideProps";
import { toPrecision } from "@osn/common";
import dayjs from "dayjs";
import { cn } from "@/utils";
import Tag from "@/components/tag";

export default function ContributionsList() {
  const { contributors } = useServerSideProps();
  const { account } = useServerSideProps();

  if (!contributors?.items?.length) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      {contributors.items.map((item, index) => {
        const amount = toPrecision(item.balance, 10);

        return (
          <div
            key={index}
            className={cn(
              "grid grid-cols-3 py-5",
              "border-t border-stroke-border-default last:border-b",
              "text14medium",
            )}
          >
            <div className="flex items-center gap-x-2">
              <NetworkUser address={item.address} network="polkadot" />
              {item.address === account?.address && "block" && (
                <Tag
                  size="small"
                  className="bg-fill-bg-tertiary border-transparent"
                >
                  Mine
                </Tag>
              )}
            </div>
            <div className="text-center text-text-tertiary">
              {dayjs(item.timestamp).format("YYYY-MM-DD")}
            </div>
            <div className="flex justify-end grow">{amount} DOT</div>
          </div>
        );
      })}
    </div>
  );
}
