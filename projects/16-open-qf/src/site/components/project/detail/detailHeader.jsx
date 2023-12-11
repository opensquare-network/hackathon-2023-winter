import { useServerSideProps } from "@/context/serverSideProps";
import Divider from "@/components/divider";

function MetaItem({ title, children }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text14medium text-text-tertiary">{title}</div>
      <div>{children}</div>
    </div>
  );
}

function Meta() {
  const { detail } = useServerSideProps();
  return (
    <div className="grid grid-cols-3 w-full">
      <MetaItem title="Create by">
        <span>{detail.creator}</span>
      </MetaItem>
      <MetaItem title="Category">
        <div className="flex gap-[8px] flex-wrap">
          {(detail.categories || []).map((item, index) => (
            <span
              key={index}
              className="px-[8px] py-[2px] rounded-[10px] text12medium text-text-secondary border border-stroke-action-default"
            >
              {item}
            </span>
          ))}
        </div>
      </MetaItem>
      <MetaItem title="Related links">
        <span></span>
      </MetaItem>
    </div>
  );
}

function Description() {
  const { detail } = useServerSideProps();

  return (
    <div className="flex flex-col gap-[8px]">
      <h1 className="text20semibold text-text-primary">{detail.name}</h1>
      <span className="text14medium text-text-tertiary">
        {detail.description}
      </span>
    </div>
  );
}

export default function DetailHeader() {
  return (
    <>
      <Description />
      <Divider />
      <Meta />
    </>
  );
}
