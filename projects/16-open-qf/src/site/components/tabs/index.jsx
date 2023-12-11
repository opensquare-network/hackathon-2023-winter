export default function Tabs({ tabs = [] }) {
  return (
    <div className="flex gap-[40px]">
      {tabs.map((tab) => (
        <div className="flex flex-col pb-[16px] border-b-[4px] border-fill-bg-brand-secondary">
          {tab.title}
        </div>
      ))}
    </div>
  );
}
