import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex flex-row gap-1">
      <p>2023</p>
      <Link href="/">Home</Link>
    </div>
  );
}
