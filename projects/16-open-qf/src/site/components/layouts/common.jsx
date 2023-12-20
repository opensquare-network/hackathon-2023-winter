import { cn } from "@/utils";

export const HeaderBg = ({ className, children }) => {
  return (
    <div className="flex flex-col relative">
      <div
        className={cn(
          "absolute z-0 left-0 right-0 top-0",
          "h-[240px] bg-fill-bg-primary border-b border-stroke-border-default",
          className,
        )}
      />
      <div className="flex z-10 grow">{children}</div>
    </div>
  );
};
