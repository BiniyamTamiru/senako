import React from "react";

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Desktop Logo */}
        <div className="cursor-pointer h-16 w-36 relative hidden lg:block">
          <img
            src="/image/image.png"
            alt="Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Mobile Logo */}
        <div className="cursor-pointer h-10 w-10 relative lg:hidden">
          <img
            src="/image/logo.png"
            alt="Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Right side */}
        <p className="font-medium text-gray-700">Right side</p>
      </div>
    </div>
  );
}