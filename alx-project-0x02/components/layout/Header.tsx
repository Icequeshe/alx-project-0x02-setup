import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 bg-gray-200 flex gap-6 justify-center">
      <Link href="/home" className="font-medium hover:underline">
        Home
      </Link>
      <Link href="/about" className="font-medium hover:underline">
        About
      </Link>
      <Link href="/posts" className="font-medium hover:underline">
        Posts
      </Link>
    </header>
  );
};

export default Header;
