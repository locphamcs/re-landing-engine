"use client";

import * as React from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "onClick"
> & {
  eventName: string;
};

export function TrackedLink({ eventName, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={() => {
        trackEvent(eventName);
      }}
    />
  );
}

