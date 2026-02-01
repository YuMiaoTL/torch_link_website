import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-white">
          TorchLink
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Careers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
