import * as React from "react";
import cx from "classnames";

export default function Button(props: {
  color: "green" | "gold";
  children: any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  submitted?: boolean;
  onClick: () => void;
}) {
  const { color, children, type, disabled, submitted, onClick } = props;

  return (
    <button
      className={cx(
        "w-full px-3 py-1 rounded-md font-bold drop-shadow-lg",
        "transition duration-200 hover:drop-shadow-md active:drop-shadow-none",
        {
          "bg-green-400": color === "green",
          "bg-amber-400": color === "gold",
          "bg-blue-400": submitted,
          "opacity-30": disabled,
        }
      )}
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
