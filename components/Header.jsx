
import React from "react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-3 sm:h-16 sm:px-6">

        {/* Logo */}
        <div className="flex shrink-0 cursor-pointer items-center">
          {/* Desktop Logo */}
          <img
            src="/image/image.png"
            alt="Logo"
            className="hidden h-12 w-32 object-contain lg:block"
          />

          {/* Mobile Logo */}
          <img
            src="/image/logo.png"
            alt="Logo"
            className="h-9 w-9 object-contain lg:hidden"
          />
        </div>

        {/* Search */}
        <div className="relative min-w-0 max-w-md flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="w-full rounded-full border border-transparent bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-100"
          />
        </div>

        {/* Navigation Icons */}
        <nav className="flex shrink-0 items-center gap-3 sm:gap-5">

          {/* Home */}
          <button
            type="button"
            aria-label="Home"
            className="hidden rounded-full p-1.5 transition hover:bg-gray-100 md:block"
          >
            <HomeIcon className="h-6 w-6 text-gray-800 transition-transform hover:scale-110" />
          </button>

          {/* Create Post */}
          <button
            type="button"
            aria-label="Create post"
            className="rounded-full p-1.5 transition hover:bg-gray-100"
          >
            <PlusCircleIcon className="h-6 w-6 text-gray-800 transition-transform hover:scale-110 sm:h-7 sm:w-7" />
          </button>

          {/* Profile */}
          <button
            type="button"
            aria-label="Profile"
            className="rounded-full p-0.5 transition hover:scale-105"
          >
            <img
              src="https://i0.wp.com/www.cruciformcoc.com/wp-content/uploads/2019/05/Cross.jpg?resize=400%2C400&ssl=1"
              alt="Profile"
              className="h-8 w-8 rounded-full border border-gray-200 object-cover sm:h-9 sm:w-9"
            />
          </button>

        </nav>
      </div>
    </header>
  );
}
