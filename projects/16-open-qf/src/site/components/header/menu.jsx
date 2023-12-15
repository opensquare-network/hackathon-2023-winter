import { cn } from "@/utils";
import { Button } from "@osn/common-ui";
import { SystemClose, SystemMenu } from "@osn/icons/opensquare";
import { useState } from "react";

export default function HeaderMobileMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>
        <Button
          className="!p-2"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? (
            <SystemClose className={cn("[&_path]:fill-text-secondary")} />
          ) : (
            <SystemMenu className={cn("[&_path]:fill-text-secondary")} />
          )}
        </Button>
      </div>

      {visible && <div className="absolute inset-0 top-20">1</div>}
    </div>
  );
}
