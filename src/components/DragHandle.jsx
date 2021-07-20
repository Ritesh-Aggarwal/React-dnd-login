import React from "react";

export default function DragHandle(props) {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <g>
              <path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
