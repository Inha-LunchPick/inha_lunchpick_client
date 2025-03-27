import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-14 bg-neutral-700 text-white flex items-center justify-between px-6">
      <div className="relative ml-auto" ref={dropdownRef}>
        <div
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full hover:bg-gray-500 flex items-center justify-center cursor-pointer transition"
        >
          <img
            src="./assets/profile.jpg"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {open && (
          <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
            <div className="p-4 border-b flex flex-col items-center">
              <img
                src="./assets/profile.jpg"
                alt="profile"
                className="rounded-full w-10 h-10 mb-2"
              />
              <div className="font-semibold text-center">이름</div>
              <div className="text-sm text-gray-500 text-center">
                이메일주소
              </div>
            </div>
            <ul className="p-2 text-sm text-center">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                계정 설정
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                로그아웃
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
