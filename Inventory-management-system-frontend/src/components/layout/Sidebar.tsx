'use client'

import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Search, 
  Package, 
  Warehouse, 
  Store, 
  BarChart3, 
  Layers,
  FileText,
  TrendingUp,
  Bot,
  Users,
  UserCog,
  Settings,
  HelpCircle,
} from 'lucide-react'

interface MenuItem {
  title: string
  icon: any
  href: string
  badge?: number
}

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems: { [key: string]: MenuItem[] } = {
    overview: [
      { title: 'Dashboard', icon: LayoutDashboard, href: '/' },
      { title: 'Global Search', icon: Search, href: '/search' },
    ],
    inventory: [
      { title: 'Products', icon: Package, href: '/products', badge: 1234 },
      { title: 'Warehouses', icon: Warehouse, href: '/warehouses', badge: 5 },
      { title: 'Outlets', icon: Store, href: '/outlets', badge: 12 },
      { title: 'Stock Management', icon: BarChart3, href: '/stock' },
      { title: 'Categories', icon: Layers, href: '/categories' },
    ],
    sales: [
      { title: 'Sales Memos', icon: FileText, href: '/sales', badge: 456 },
      { title: 'Analytics', icon: TrendingUp, href: '/analytics' },
      { title: 'AI Agents', icon: Bot, href: '/ai-agents' },  // FIXED: was /agents
    ],
    people: [
      { title: 'Customers', icon: Users, href: '/customers', badge: 2845 },
      { title: 'Staff Management', icon: UserCog, href: '/staff', badge: 48 },
    ],
    system: [
      { title: 'Settings', icon: Settings, href: '/settings' },
      { title: 'Help & Support', icon: HelpCircle, href: '/help' },  // FIXED: was /support
    ],
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  const handleNavigation = (href: string) => {
    router.push(href, { scroll: false })
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 overflow-hidden">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <button 
          onClick={() => handleNavigation('/')}
          className="flex items-center gap-3 w-full text-left"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">WEB YOUR</h1>
            <h2 className="text-lg font-bold text-indigo-600">VYAVSAY</h2>
            <p className="text-xs text-gray-500">Inventory Management System</p>
          </div>
        </button>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        {Object.entries(menuItems).map(([section, items]) => (
          <div key={section} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3 px-3">
              {section.replace('_', ' & ')}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.title}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                      isActive(item.href)
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isActive(item.href)
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Support Card - Fixed at bottom */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <div className="bg-indigo-50 rounded-xl p-4">
          <h4 className="text-sm font-bold text-gray-900 mb-1">Need Help?</h4>
          <p className="text-xs text-gray-600 mb-3">Contact support team</p>
          <button 
            onClick={() => handleNavigation('/help')}
            className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Support
          </button>
        </div>
      </div>
    </aside>
  )
}
