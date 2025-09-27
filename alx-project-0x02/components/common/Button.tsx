import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button = ({ size, shape, label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape}`}
    >
      {label}
    </button>
  );
};

export default Button;
