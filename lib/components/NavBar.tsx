import Link from "next/link";
import { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <header className="sticky top-0 left-0 right-0 dark:bg-black bg-white w-full">
      <nav className="w-full px-5 py-5 flex items-center justify-center gap-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/search"}>Search</Link>
        <Link href={"/upload"}>Upload</Link>
        <Link href={"/chat"}>Chat</Link>
      </nav>
    </header>
  );
};

export default NavBar;
