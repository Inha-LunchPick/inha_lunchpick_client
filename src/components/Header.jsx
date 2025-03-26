import React from 'react'

export default function Header() {
  return (
    <div className="w-full h-14 bg-gray-600 text-white flex items-center justify-between px-6">
      <div className="text-lg font-semibold">기본 레이아웃</div>
      <button className="bg-gray-400 text-white rounded-full px-4 py-1 text-sm hover:bg-gray-500 transition">
        로그인
      </button>
    </div>
  )
}
