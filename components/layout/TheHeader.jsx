import Link from "next/link";

export default function TheHeader() {
  return (
    <header className=" mt-1 pl-2 mb-12 text-4xl font-bold text-slate-200 ... lg:mt-8">
      <h1>

      <Link href='/'>
        Blog
      </Link>
      </h1>
    </header>
  );
}
