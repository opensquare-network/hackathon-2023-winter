import Card from "../card";
import { Input } from "@osn/common-ui";
import { SystemSearch } from "@osn/icons/opensquare";
import Tag from "../tag";
import { cn } from "@/utils";
import { useState } from "react";
import Dot from "../dot";

const tagList = [
  {
    label: "All",
  },
  {
    label: "Infrastructure",
  },
  {
    label: "Community",
  },
  {
    label: "Education",
  },
];

export default function RoundProjectList({ data = {} }) {
  const { projects = [] } = data;
  const [activeTag, setActiveTag] = useState(tagList[0].label);

  return (
    <div className="space-y-5">
      <Card size="small">
        <div className={cn("flex justify-between gap-5", "max-sm:flex-col")}>
          <div className="flex items-center flex-wrap gap-3">
            {tagList.map((tag) => (
              <Tag
                key={tag.label}
                active={tag.label === activeTag}
                onClick={() => setActiveTag(tag.label)}
              >
                {tag.label}
              </Tag>
            ))}
          </div>
          <div className="w-[344px] max-w-full">
            <Input
              placeholder="Search for project"
              suffix={
                <SystemSearch className="w-5 h-5 [&_path]:fill-text-tertiary" />
              }
            />
          </div>
        </div>
      </Card>

      <div className="space-y-5">
        <h3 className="text18semibold text-text-primary">
          Leaderboard <Dot className="mx-1" />
          <span className="text-text-tertiary">{projects.length}</span>
        </h3>

        <div
          className={cn(
            "grid grid-cols-3 gap-5",
            "max-md:grid-cols-2",
            "max-sm:grid-cols-1",
          )}
        >
          {projects.map((project, idx) => (
            <Card
              key={idx}
              cover={<></>}
              coverPosition="top"
              size="small"
              head={
                <div>
                  <div className="h-6">
                    <div
                      className={cn(
                        "relative -top-12",
                        "bg-neutral-200",
                        "w-16 h-16 rounded-full border-2 border-stroke-border-default",
                      )}
                    >
                      {/* icon */}
                    </div>
                  </div>
                  <div>
                    <h4 className="text16semibold text-text-primary">
                      {project.title}
                    </h4>
                    <p className="mt-2 text14medium text-text-secondary">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 space-y-1">
                    <div className="text14medium text-text-tertiary">
                      Total Raised
                    </div>
                    <div className="text16semibold text-text-primary">
                      123 DOT
                    </div>
                    <div className="text12medium text-text-tertiary">
                      from <span className="text-text-primary">34</span>{" "}
                      Contributors
                    </div>
                  </div>
                </div>
              }
            >
              <div className="flex items-center justify-between">
                <div>by address</div>
                <div>
                  <Tag size="small">Infrastructure</Tag>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
