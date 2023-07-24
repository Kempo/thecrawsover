import Head from "next/head";
import Script from "next/script";

export default function Shop() {
  return (
    <div className="h-screen">
      <Script src="/script.js" />
      <Head>
        <title>Online Shop</title>
      </Head>
      <h1 className="text-2xl font-bold text-center">Online Shop</h1>
      <div className="flex justify-center">
        <div id="collection-component-1690158830520"></div>
      </div>
    </div>
  );
}
