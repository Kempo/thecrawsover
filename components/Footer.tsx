import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-4 text-center p-8 border-t bg-gray-50">
      <p className="text-gray-400 mt-0 mb-2">
        <i>The best summer basketball league in the United States.</i>
      </p>
      <div className="flex justify-center items-center gap-2">
        <a href="https://twitter.com/thecrawsover">Twitter</a>
        <a href="https://t.co/me5fBznzko?amp=1">Facebook</a>
        <a href="https://www.instagram.com/thecrawsover/">Instagram</a>
      </div>
      <div className="text-center text-gray-600 my-4">/</div>
      <div className="text-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScJj1jl-JW70tSNbfnq77xt_FUCyX0O_fCzj0uEUthD6YzrbQ/viewform">
          Events Signup
        </Link>
      </div>
    </footer>
  );
}
