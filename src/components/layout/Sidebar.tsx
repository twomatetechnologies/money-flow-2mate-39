import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BarChart, Users, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Sidebar = () => {
  const { logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <aside className="bg-gray-50 dark:bg-gray-900 w-64 min-h-screen py-8 px-4 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      
      <div className="mb-8">
        <Link to="/" className="flex items-center space-x-2.5">
          <BarChart className="h-6 w-6 text-primary" />
          <span className="text-2xl font-semibold dark:text-white">Money Flow</span>
        </Link>
      </div>

      
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/stocks" className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white">
              <BarChart className="h-4 w-4" />
              <span>Stocks</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white">
              <Users className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-2 space-x-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
