import Image from "next/image";
import Button from "./button";
import ThemeSwitch from "./theme-switch-toggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mt-4 mb-16">
      <div className="flex items-center">
        <Image
          src="/icon.png"
          alt="Entertainment Logo"
          height={30}
          width={30}
        />
        <span className="text-neutral-700 dark:text-neutral-300 text-xl font-bold">
          Entertainment
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeSwitch />
        <Button buttonText="Sign in" />
      </div>
    </nav>
  );
};

export default Navbar;
