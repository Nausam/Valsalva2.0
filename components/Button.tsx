import clsx from "clsx";

import React from "react";

interface ButtonProps {
  id: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  textSize?: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  textSize,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black shadow-md",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-medium text-xs uppercase">
        <div
          className={clsx(
            "translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12",
            textSize
          )}
        >
          {title}
        </div>
        <div
          className={clsx(
            "absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0",
            textSize
          )}
        >
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
