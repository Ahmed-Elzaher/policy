import React from "react";
import { ShieldIcon, TrashIcon, SparklesIcon } from "./Icons.jsx";

export function CalloutBox({ type = "info", title, children }) {
  const iconMap = {
    info: <ShieldIcon size={20} />,
    danger: <TrashIcon size={20} />,
    warning: <SparklesIcon size={20} />,
    success: <ShieldIcon size={20} />,
  };

  return (
    <div className={`callout callout-${type}`}>
      <span className="callout-icon">{iconMap[type] || iconMap.info}</span>
      <div className="callout-content">
        {title && <h4>{title}</h4>}
        <div>{children}</div>
      </div>
    </div>
  );
}
