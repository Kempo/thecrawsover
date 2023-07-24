import Link from "next/link";

export default function Archive() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-2 text-center">PAST SUMMERS</h1>
      <p className="text-gray-500 text-center mb-4">
        Previous information on the years before are located here.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Link href="/2022">SUMMER 2022</Link>
        <Link href="/2021">SUMMER 2021</Link>
      </div>
    </div>
  );
}
