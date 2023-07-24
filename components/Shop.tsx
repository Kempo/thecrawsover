import Link from "next/link";
import Script from "next/script";

export default function Shop() {
  return (
    <div className="my-8">
      <Script src="/script.js" />
      <h1 className="text-2xl font-bold mb-2 text-center">MERCH</h1>
      <p className="text-center text-gray-400">
        <Link href="https://shop.thecrawsoverseattle.com/">
          Visit the Web Shop here
        </Link>
      </p>
      <div className="flex justify-center mb-4">
        <div id="collection-component-1690158830520"></div>
      </div>
    </div>
  );
}
