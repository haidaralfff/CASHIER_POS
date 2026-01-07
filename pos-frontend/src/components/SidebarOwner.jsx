import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Briefcase
} from "lucide-react";

export default function SidebarOwner() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-red-600 text-white"
         : "text-gray-700 hover:bg-red-100"
     }`;

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="mb-6 flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
        <Briefcase className="h-4 w-4" />
        <span>Owner</span>
      </h2>

      <nav className="space-y-1">
        {/* Dashboard */}
        <NavLink to="/owner/dashboard" className={linkClass}>
          <LayoutDashboard className="h-5 w-5 shrink-0" />
          <span>Dashboard</span>
        </NavLink>

        {/* Manajemen Barang */}
        <NavLink to="/owner/barang" className={linkClass}>
          <ShoppingCart className="h-5 w-5 shrink-0" />
          <span>Manajemen Barang</span>
        </NavLink>

        {/* Data Transaksi */}
        <NavLink to="/owner/transaksi" className={linkClass}>
          <FileText className="h-5 w-5 shrink-0" />
          <span>Data Transaksi</span>
        </NavLink>

        {/* Laporan */}
        <NavLink to="/owner/laporan" className={linkClass}>
          <BarChart3 className="h-5 w-5 shrink-0" />
          <span>Laporan</span>
        </NavLink>

        {/* Settings */}
        <NavLink to="/owner/settings" className={linkClass}>
          <Settings className="h-5 w-5 shrink-0" />
          <span>Settings</span>
        </NavLink>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-4 w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium
                     text-red-600 hover:bg-red-50 cursor-pointer transition"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}
