"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
// import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Ayrton",
      link: "/ayrton",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full" id="main-navbar">
      <Navbar className="absolute top-10 left-0 right-0">
        {/* Desktop Navigation */}
        <NavBody className="rounded-full border border-white bg-black">  
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <NavbarButton variant="primary">Log In</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
