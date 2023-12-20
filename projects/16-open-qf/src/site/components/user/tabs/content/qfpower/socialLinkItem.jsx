import { Button } from "@osn/common-ui";
import Card from "@/components/card";
import React from "react";
import { cn } from "@/utils";
import { noop } from "lodash-es";

export default function SocialLinkItem({ item, onClick = noop }) {
  return (
    <Card key={item.title} size="small">
      <div className="space-y-5">
        <div className="flex justify-between">
          <div className="w-12 h-12 bg-fill-bg-quaternary">
            <img src={item.image} alt="" />
          </div>
          <div className="text16semibold text-text-brand-secondary">
            +{item.power}
          </div>
        </div>

        <div className={cn("flex justify-between gap-5", "max-sm:flex-col")}>
          <div className="space-y-1">
            <h5 className="text16semibold text-text-primary">{item.title}</h5>
            <p className="text14medium text-text-tertiary">
              {item.description}
            </p>
          </div>
          <div className="flex items-end">
            <Button onClick={onClick}>Connect</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
