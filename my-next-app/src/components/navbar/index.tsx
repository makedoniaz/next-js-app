'use client';

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const AppNavbar = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">BRAND</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="start">
        <NavbarItem className="p">
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;