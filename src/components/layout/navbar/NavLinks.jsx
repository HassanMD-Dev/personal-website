import React from "react";

const NavLinks = ({ links, activeSection }) => {
  return (
    <ul className="hidden md:flex gap-8">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.linkId}
            className={`font-medium transition-colors duration-200 ${
              activeSection === link.linkId.replace("#", "")
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
