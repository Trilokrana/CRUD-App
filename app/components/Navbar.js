import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-8 py-5 rounded-lg">
      <Link className="text-white font-bold text-2xl" href={"/"}>
        Stock Inventory
      </Link>
      <Link className="bg-white hover:bg-gray-300 p-2 rounded-lg text-lg px-3 font-semibold " href={"/AddProducts"}>
        Add Products
      </Link>
    </nav>
  );
}
