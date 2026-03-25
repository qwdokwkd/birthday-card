import { buildClassName } from "@/shared/lib";
import "./Button.scss";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  type = "button",
  disabled = false,
  secondary = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={buildClassName("button", className ? [className] : undefined, {
        secondary,
      })}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
