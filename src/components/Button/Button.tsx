import { ComponentProps } from "preact/compat";

interface Props extends ComponentProps<"button"> {
  ariaLabel: string;
}

function Button({ className, onClick, children, ariaLabel, ...rest }: Props) {
  return (
    <button
      className={`btn-ghost tooltip btn ${className}`}
      onClick={onClick}
      type="button"
      data-tip={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
