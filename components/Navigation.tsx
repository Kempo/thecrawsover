import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex flex-row gap-4 justify-center my-4 text-gray-400	">
      <div>
        <p>
          Current Year: <Link href="/">2023</Link>
        </p>
      </div>
      <div>
        <p>
          Past Years: <Link href="/2022">2022</Link>
        </p>
      </div>
    </div>
  );
}
