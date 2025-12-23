import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Package,
  Boxes,
  Users
} from "lucide-react";

export default function SidebarOwner() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-gray-700 hover:bg-blue-100"
     }`;

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Owner</h2>

      <nav className="space-y-1">
        {/* Dashboard */}
        <NavLink to="/owner/dashboard" className={linkClass}>
          <LayoutDashboard className="h-5 w-5 shrink-0" />
          <span>Dashboard</span>
        </NavLink>

        {/* Laporan */}
        <NavLink to="/owner/laporan" className={linkClass}>
          <FileText className="h-5 w-5 shrink-0" />
          <span>Laporan</span>
        </NavLink>

        {/* Produk */}
        <NavLink to="/owner/produk" className={linkClass}>
          <Package className="h-5 w-5 shrink-0" />
          <span>Produk</span>
        </NavLink>

        {/* Stok */}
        <NavLink to="/owner/stok" className={linkClass}>
          <Boxes className="h-5 w-5 shrink-0" />
          <span>Stok</span>
        </NavLink>

        {/* User Management */}
        <NavLink to="/owner/users" className={linkClass}>
          <Users className="h-5 w-5 shrink-0" />
          <span>User Management</span>
        </NavLink>
      </nav>
    </aside>
  );
}
