"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import img from "./../Assets/user-profile.jpeg";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-1 sm:mx-auto z-50 flex flex-row justify-between items-center",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/Courses">All Courses</HoveredLink>
            <HoveredLink href="/Courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/Courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/Courses">Songwriting</HoveredLink>
            <HoveredLink href="/Courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/Contact">
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
      <div className="relative">
        <div className="w-16 h-16 rounded-full flex justify-center items-center">
          <div className="border-b-2 border-t-2 border-blue-400 rounded-full animate-spinSlow absolute inset-0"></div>
          <div onClick={toggleDropdown} className="cursor-pointer w-14 h-14 relative z-10">
            <Image src={img} alt="user-profile" className="rounded-full w-full h-full" />
          </div>
        </div>
        {dropdownVisible && (  
          <div className="absolute right-0 mt-12 w-48  rounded-md shadow-lg z-20">
            <Link href="/Login">
              <div className="block m-1 bg-slate-900 px-4 py-2 hover:font-semibold text-white hover:text-black hover:bg-gray-200 rounded-md">Login/Signup</div>
            </Link>
            <Link href="/Account">
              <div className="block m-1 bg-slate-900 px-4 py-2 hover:font-semibold text-white hover:text-black hover:bg-gray-200 rounded-md">Account</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
