import React from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  onClick?: () => void;
  styles?: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button = (props: Props) => {
  return (
    <button
      className={`${props.styles} ...`}
      type={props?.type}
      title={props.title}
      disabled={props.disabled}
      onClick={props?.onClick}
    >
      {props.children}
      {props.icon && props.icon}
    </button>
  );
};

export default Button;
