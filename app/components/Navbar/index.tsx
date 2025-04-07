/** Navbar documentation
 */
"use client";
import logo from "@/public/jrv-logo.jpeg";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface iNavbarProps {
  "data-test-id"?: string;
}

const PATHS = [
  { label: "bio", path: "/bio" },
  { label: "writing", path: "/writing" },
  { label: "work", path: "/work" },
  // { label: "else", path: "/else" },
];

export const Navbar = (props: iNavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="root navbar">
      <Link href="/" className={"/" === pathname ? "current" : ""}>
        <Image src={logo} width={64} height={64} alt="Jay Vigilla logo" />
      </Link>
      <div>
        {PATHS.map((p) => {
          return (
            <span key={p.label}>
              <Link
                className={p.path === pathname ? "current" : ""}
                href={p.path}
              >
                {p.label}
              </Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
};
