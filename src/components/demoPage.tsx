
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Card, CardContent } from "./card";
const DemoPage = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Desktop */}
      <aside className={`hidden md:flex flex-col w-64 bg-gray-100 p-4`}>
        <h2 className="text-xl font-bold">Introduction</h2>
        <nav className="mt-4 space-y-2">
          <a href="#" className="block p-2 bg-gray-200 rounded">Healthcare</a>
          <a href="#" className="block p-2 bg-gray-200 rounded">Automotive</a>
          <a href="#" className="block p-2 bg-gray-200 rounded">Manufacturing</a>
          <a href="#" className="block p-2 bg-gray-200 rounded">Travel</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 bg-white shadow md:hidden">
          <FiMenu className="text-2xl" onClick={() => setSidebarOpen(!sidebarOpen)} />
          <h1 className="text-lg font-bold">wordworksai</h1>
        </header>

        {/* Page Content */}
        <main className="p-4 space-y-4">
          <h2 className="text-2xl font-bold">Welcome to WordworksAI</h2>
          <p className="text-gray-600">
            Enhance response accuracy and speed with our AI chatbots...
          </p>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <h3 className="font-semibold">Our Partners</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-semibold">Integrations</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-semibold">Our Customers</h3>
              </CardContent>
            </Card>
          </div>

          {/* Analytics */}
          <h3 className="text-xl font-semibold">Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <h4 className="font-semibold">Customer Satisfaction</h4>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold">Conversation Trend</h4>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold">Ticket Handling  Time</h4>
              </CardContent>
            </Card>
          </div>
        </main> 
      </div>
    </div>
  )
}

export default DemoPage

