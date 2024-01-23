import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-60 p-6 bg-trunks h-screen">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/uploads">Uploads</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
