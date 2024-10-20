import "./x-axis-view.css";

import { forwardRef } from "react";

export type XAxisViewProps = {
  simple: boolean;
};

export const XAxisView = forwardRef<HTMLDivElement, XAxisViewProps>(
  ({ simple = false }, ref) => {
    return (
      <div
        ref={ref}
        className="x-axis-container"
        style={{
          height: "24px",
          visibility: "visible",
        }}
      >
        <d3fc-canvas class="x-axis" use-device-pixel-ratio />
        <d3fc-svg class="x-axis-interaction" />
      </div>
    );
  },
);
