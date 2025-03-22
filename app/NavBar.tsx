import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b">
      <ul className="flex">
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
