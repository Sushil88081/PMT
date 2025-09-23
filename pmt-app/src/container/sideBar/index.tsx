import React, { useState } from 'react'
import { 
  HiHome, 
  HiInbox, 
  HiClipboardList, 
  HiChevronDown, 
  HiChevronRight,
  HiMenu,
  HiX,
  HiUser,
  HiCog,
  HiDocumentText,
  HiChartBar,
  HiBell
} from 'react-icons/hi'

interface SubItem {
  id: string
  label: string
  icon?: React.ReactNode
  href?: string
}

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  subItems?: SubItem[]
}

const navigationItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HiHome className="w-5 h-5" />,
    href: '/home'
  },
  {
    id: 'inbox',
    label: 'Inbox',
    icon: <HiInbox className="w-5 h-5" />,
    href: '/inbox',
    subItems: [
      { id: 'inbox-all', label: 'All Messages', href: '/inbox/all' },
      { id: 'inbox-unread', label: 'Unread', href: '/inbox/unread' },
      { id: 'inbox-important', label: 'Important', href: '/inbox/important' }
    ]
  },
  {
    id: 'mytask',
    label: 'My Tasks',
    icon: <HiClipboardList className="w-5 h-5" />,
    href: '/tasks',
    subItems: [
      { id: 'tasks-today', label: 'Today', href: '/tasks/today' },
      { id: 'tasks-upcoming', label: 'Upcoming', href: '/tasks/upcoming' },
      { id: 'tasks-completed', label: 'Completed', href: '/tasks/completed' }
    ]
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <HiDocumentText className="w-5 h-5" />,
    href: '/projects',
    subItems: [
      { id: 'projects-active', label: 'Active Projects', href: '/projects/active' },
      { id: 'projects-archived', label: 'Archived', href: '/projects/archived' }
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <HiChartBar className="w-5 h-5" />,
    href: '/analytics'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <HiBell className="w-5 h-5" />,
    href: '/notifications'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <HiUser className="w-5 h-5" />,
    href: '/profile'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <HiCog className="w-5 h-5" />,
    href: '/settings'
  }
]

interface SidebarProps {
  isCollapsed?: boolean
  onToggle?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false, onToggle }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const handleItemClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      toggleExpanded(item.id)
    }
  }

  return (
    <div className={`bg-white border-r border-blue-100 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } h-screen flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-blue-100 ">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-semibold text-blue-600">PMT</h1>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
          >
            {isCollapsed ? <HiMenu className="w-5 h-5" /> : <HiX className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => (
          <div key={item.id}>
            {/* Main Item */}
            <div
              onClick={() => handleItemClick(item)}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 group ${
                isCollapsed 
                  ? 'justify-center hover:bg-blue-50' 
                  : 'hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 group-hover:text-blue-700">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="text-sm text-gray-700 group-hover:text-blue-600 font-medium">
                    {item.label}
                  </span>
                )}
              </div>
              
              {!isCollapsed && item.subItems && item.subItems.length > 0 && (
                <span className="text-blue-600">
                  {expandedItems.includes(item.id) ? (
                    <HiChevronDown className="w-4 h-4" />
                  ) : (
                    <HiChevronRight className="w-4 h-4" />
                  )}
                </span>
              )}
            </div>

            {/* Sub Items */}
            {!isCollapsed && item.subItems && expandedItems.includes(item.id) && (
              <div className="ml-8 mt-2 space-y-1">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span className="text-sm text-gray-600 hover:text-blue-600">
                      {subItem.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="px-4 py-1 border-t border-blue-100">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">U</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">User Name</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar