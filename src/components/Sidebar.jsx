import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const menus = [
    { key: "/", value: "홈" },
    { key: "/menu", value: "메뉴 설정" },
    { key: "/restaurant", value: "식당 설정" },
    { key: "/recommend", value: "추천 설정" },
    { key: "/bot", value: "봇 설정" },
  ];

  const location = useLocation();

  return (
    <div className="w-48 bg-neutral-800 text-white h-screen flex flex-col justify-between p-4">
      <div>
        <ul className="py-20 space-y-4">
          {menus.map((menu) => (
            <li key={menu.key}>
              <Link
                to={menu.key}
                className={`block text-center py-3 rounded hover:bg-neutral-700 ${
                  location.pathname === menu.key
                    ? "bg-neutral-700 font-semibold"
                    : ""
                }`}
              >
                {menu.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <Link
          to="/settings"
          className={`block text-center py-3 rounded hover:bg-neutral-700 ${
            location.pathname === "/settings"
              ? "bg-neutral-700 font-semibold"
              : ""
          }`}
        >
          앱 설정
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
