import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-2">
        {/* Desktop Logo */}
        <div className="cursor-pointer h-12 w-32 relative hidden lg:block">
          <img
            src="/image/image.png"
            alt="Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Mobile Logo */}
        <div className="cursor-pointer h-10 w-10 relative lg:hidden shrink-0">
          <img
            src="/image/logo.png"
            alt="Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Middle: Search Box (Responsive sizing) */}
        <div className="relative mx-2 sm:mx-4 max-w-xs w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 pl-10 pr-4 py-1.5 sm:py-2 text-sm rounded-lg border border-transparent focus:bg-white focus:border-black focus:outline-none transition-all duration-200"
          />
        </div>

        {/* Right side */}
        <div className="shrink-0">
          <p className="font-medium text-sm sm:text-base text-gray-700">Right side</p>
        </div>
      </div>
    </div>
  );
}