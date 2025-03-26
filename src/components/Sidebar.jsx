import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const menus = [
    { key: '/', value: '홈' },
    { key: '/menu', value: '메뉴 설정' },
    { key: '/restaurant', value: '식당 설정' },
    { key: '/recommend', value: '추천 설정' },
    { key: '/bot', value: '봇 설정' }
  ]

  const location = useLocation()

  return (
    <div className="w-48 bg-gray-800 text-white h-screen flex flex-col justify-between p-4">
      <div>
        {/* <h2 className="text-lg font-bold mb-4">관리자</h2> */}
        <ul className="space-y-2">
          {menus.map(menu => (
            <li key={menu.key}>
              <Link
                to={menu.key}
                className={`block px-4 py-2 rounded hover:bg-gray-700 ${
                  location.pathname === menu.key ? 'bg-gray-700 font-semibold' : ''
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
          className={`block px-4 py-2 rounded hover:bg-gray-700 ${
            location.pathname === '/settings' ? 'bg-gray-700 font-semibold' : ''
          }`}
        >
          앱 설정
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
