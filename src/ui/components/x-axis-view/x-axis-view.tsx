import "./x-axis-view.css";

import { forwardRef } from "react";

export type XAxisViewProps = {
  simple: boolean;
  interaction: boolean;
};

export const XAxisView = forwardRef<HTMLDivElement, XAxisViewProps>(
  ({ simple = false, interaction = true }, ref) => {
    return (
      <div
        ref={ref}
        className="x-axis-container"
        style={{
          height: simple ? 0 : "24px",
          visibility: simple ? "hidden" : "visible",
        }}
      >
        <d3fc-canvas class="x-axis" use-device-pixel-ratio />

        {interaction ? <d3fc-svg class="x-axis-interaction" /> : null}
      </div>
    );
  },
);
