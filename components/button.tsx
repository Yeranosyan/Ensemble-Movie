import { MouseEventHandler } from "react";

interface ButtonProps {
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ buttonText, onClick }: ButtonProps) {
  return (
    <button
      className={
        "bg-gradient-to-r from-red-500 to-red-700 text-transparent text-white px-3 py-2 rounded-lg cursor-pointer"
      }
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
