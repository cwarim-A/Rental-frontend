import { NavLink } from "react-router-dom";
import { FiGrid, FiHome, FiCalendar, FiUser, FiLogOut } from "react-icons/fi";
import Logo from "../assets/Logo";


const links = [
    { to: "/dashboard", icon: <FiGrid />, label: "Overview" },
    { to: "/dashboard/properties", icon: <FiHome />, label: "Properties" },
    { to: "/dashboard/bookings", icon: <FiCalendar />, label: "Bookings" },
    { to: "/dashboard/profile", icon: <FiUser />, label: "Profile" },
];


const Sidebar = () => {
  return (
    <aside className="w-64 bg-navy text-white h-screen p-4 sticky top-0 flex flex-col justify-between">
          <div>
              <div className="mb-10">
                  <Logo size="sm" variant="white" /> 
              </div>

              <nav className="flex flex-col gap-2">
                  {links.map(({ to, icon, label }) => (
                      <NavLink
                          key={to}
                          to={to}
                          end={to === "/dashboard"}
                          className={({ isActive }) =>
                              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-sans transition
                ${isActive
                                  ? "bg-brand-blue text-white"
                                  : "text-white/50 hover:text-white hover:bg-white/10"
                              }`
                          }
                      >
                          <span className="text-lg">{icon}</span>
                          {label}
                      </NavLink>
                  ))}
              </nav>
          </div>

          {/* Bottom — Logout */}
          <button
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/10 transition font-sans"
          >
              <FiLogOut className="text-lg" />
              Logout
          </button>
    </aside>
  )
}

export default Sidebar