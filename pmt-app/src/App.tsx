
import { useState } from 'react'
import Sidebar from './container/sideBar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={toggleSidebar} 
      />
      
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-8 min-h-full">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-sm font-semibold text-gray-900 mb-6">
                Welcome to PMT Dashboard
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                  <h3 className="text-sm font-semibold text-blue-600 mb-2">Home</h3>
                  <p className="text-gray-600">Your dashboard overview and quick access to important information.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                  <h3 className="text-sm font-semibold text-blue-600 mb-2">Inbox</h3>
                  <p className="text-gray-600">Manage your messages and communications in one place.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                  <h3 className="text-sm font-semibold text-blue-600 mb-2">My Tasks</h3>
                  <p className="text-gray-600">Track and manage your tasks and assignments efficiently.</p>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">Features</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expandable sidebar with navigation items</li>
                  <li>• Collapsible sidebar to save space</li>
                  <li>• Sub-navigation for organized content</li>
                  <li>• Clean white and blue theme</li>
                  <li>• Responsive design with Tailwind CSS</li>
                </ul>
              </div>

              {/* Additional content to demonstrate scrolling */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">Additional Content</h2>
                <p className="text-gray-600 mb-4">This content demonstrates that the main area is scrollable while the sidebar remains fixed.</p>
                
                <div className="space-y-4">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h3 className="text-sm font-semibold text-blue-700">Content Block {i + 1}</h3>
                      <p className="text-blue-600 text-sm">This is additional content to show scrolling behavior. The sidebar navigation stays fixed while this content area scrolls.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App