import Link from "next/link";

export default function Navigation() {
  return (
    <div className="py-4 border-x-0 border-solid border-b mb-6">
      <div className="flex flex-row gap-4 justify-center">
        <div>
          <p>
            <Link href="/">Summer 2023</Link> (current)
          </p>
        </div>
        <div>
          <p>
            <Link href="/2022">Summer 2022</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
