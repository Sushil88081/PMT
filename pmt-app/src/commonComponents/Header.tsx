import React from 'react'
import { useLocation } from 'react-router'

interface HeaderProps {
  className?: string
}


const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation()
  const pathName = location.pathname
  console.log("location", location.pathname)

  return (
    <header className={`bg-white border-b border-gray-200 shadow-sm ${className}`}>
      <div className="px-6 py-[13px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {
              pathName === "/home" ? (
                <h2 className="text-sm font-semibold text-blue-600">Home</h2>
              ) : pathName === "/projects" ? (
                <h2 className="text-sm font-semibold text-blue-600">Projects</h2>
              ) : pathName === "/tasks" ? (
                <h2 className="text-sm font-semibold text-blue-600">Tasks</h2>
              ) : pathName=="/inbox"?(
                <h2 className="text-sm font-semibold text-blue-600">Inbox</h2>
              ):pathName=="/analytics"?(
                  <h2 className="text-sm font-semibold textblue-600 ">Analytics</h2>
              ):pathName=="/notifications"?(
                  <h2 className="text-sm font-semibold text-blue-600">Notifications</h2>
              ):pathName=="/profile"?(
                  <h2 className="text-sm font-semibold text-blue-600">Profile</h2>
              ):pathName=="/chat"?(
                  <h2 className="text-sm font-semibold text-blue-600">Chat</h2>
              ):pathName=="/settings"?(
                  <h2 className="text-sm font-semibold text-blue-600">Setting</h2>
              ):""
            }

          </div>

          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Notification bell */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* User avatar */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">U</span>
              </div>
              <span className="hidden md:block text-sm font-medium text-blue-600">User Name</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
