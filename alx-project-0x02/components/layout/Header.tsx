import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 shadow-md bg-gray-100 flex gap-5">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </header>
  );
};

export default Header;
