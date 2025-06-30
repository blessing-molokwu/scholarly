import { Link } from "react-router-dom";
import { Search, Bell, MessageSquare, User, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/feed" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">RH</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                ResearchHub
              </span>
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search papers, groups, researchers..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Post</span>
            </button>
            <Bell className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <MessageSquare className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Link to="/profile/1">
              <User className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
