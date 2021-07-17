import React from "react";

const Icon = ({ fill = "white", icon, size = 24, viewBox }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox.viewBox}
      width={size}
      height={size}
      fill={fill}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;
