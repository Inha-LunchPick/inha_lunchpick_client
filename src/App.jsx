import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

// 페이지 컴포넌트들 (더 나중에 분리해도 됨)
function Home() {
  return <div className="p-4">🏠 홈 화면</div>
}
function MenuSetup() {
  return <div className="p-4">🍽️ 메뉴 설정 화면</div>
}
function RestaurantSetup() {
  return <div className="p-4">🏢 식당 설정 화면</div>
}
function RecommendSetup() {
  return <div className="p-4">✨ 추천 설정 화면</div>
}
function BotSetup() {
  return <div className="p-4">🤖 봇 설정 화면</div>
}
function AppSetting() {
  return <div className="p-4">⚙️ 앱 설정 화면</div>
}

function App() {
  return (
    <Router>
      {/* 전체 레이아웃 */}
      <div className="flex h-screen">
        {/* 좌측 사이드바 */}
        <Sidebar />

        {/* 우측 콘텐츠 영역 */}
        <div className="flex-1 flex flex-col">
          {/* 상단 헤더 */}
          <Header />

          {/* 페이지 내용 */}
          <div className="flex-1 bg-gray-50 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuSetup />} />
              <Route path="/restaurant" element={<RestaurantSetup />} />
              <Route path="/recommend" element={<RecommendSetup />} />
              <Route path="/bot" element={<BotSetup />} />
              <Route path="/settings" element={<AppSetting />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
