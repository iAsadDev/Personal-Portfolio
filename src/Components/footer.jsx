import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white min-h-[7vh] md:min-h-[8vh] flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-2 text-sm">
        <span className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Asad. All rights reserved.
        </span>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-400" />
          <a
            href="mailto:i.am.asad586@gmail.com"
            className="hover:text-white text-gray-300 transition"
          >
            i.am.asad586@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
