import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col items-center p-8 my-8 bg-gray-100">
      <h1 className="italic mb-6 text-lg">
        Be on the lookout for last-minute special NBA appearances, surprise
        midnight basketball runs, or other special events here.
      </h1>
      <Link
        className="text-lg border rounded p-4 bg-slate-950"
        href="https://docs.google.com/forms/d/e/1FAIpQLScJj1jl-JW70tSNbfnq77xt_FUCyX0O_fCzj0uEUthD6YzrbQ/viewform"
      >
        EVENTS SIGNUP
      </Link>
    </div>
  );
}
