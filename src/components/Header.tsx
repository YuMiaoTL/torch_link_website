import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Torch Link
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className="text-gray-600 hover:text-gray-900"
            >
              Careers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
