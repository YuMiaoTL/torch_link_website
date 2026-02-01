import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
          <Link href="/careers" className="hover:text-gray-900">
            Careers
          </Link>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Torch Link. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
