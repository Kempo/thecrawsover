import Link from "next/link";

export default function Navigation() {
  return (
    <div className="py-4 border-x-0 border-solid border-b mb-6 bg-gray-50">
      <div className="flex flex-col gap-2 justify-center items-center md:flex-row">
        <p>
          <Link href="/">THE CRAWSOVER 2023</Link>
        </p>
        <p>
          <Link href="/faq">FAQ</Link>
        </p>
        <p>
          <Link href="https://shop.thecrawsoverseattle.com/">ONLINE MERCH</Link>
        </p>
      </div>
    </div>
  );
}
