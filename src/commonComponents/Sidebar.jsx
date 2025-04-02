import { NavLink } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineLineChart ,AiOutlineSetting} from "react-icons/ai";
import { MdDashboard, MdConnectWithoutContact, MdNotificationsActive,MdPerson } from "react-icons/md";
import { useAppContext } from "../contexts/AppContext";

const navItems = [
  { path: "/", label: "Dashboard", icon: <MdDashboard className="text-xl" /> },
  { path: "/analytics", label: "Analytics", icon: <AiOutlineLineChart className="text-xl" /> },
  { path: "/connect", label: "Connect", icon: <MdConnectWithoutContact className="text-xl" /> },
  { path: "/activity", label: "Activity", icon: <MdNotificationsActive className="text-xl" /> },
  { path: "/dealroom", label: "Dealroom", icon: <AiOutlineAppstore className="text-xl" /> },
  { path: "/settings", label: "Settings", icon: <AiOutlineSetting className="text-xl" /> },
  { path: "/profile", label: "Profile", icon: <MdPerson className="text-xl" /> },
];

function Sidebar() {
  const {setPathname}=useAppContext();
  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed inset-y-0 left-0 w-64 border-r border-gray-700">
        <nav className="text-gray-400 mt-12">
          <div className="flex p-4 w-full">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps="
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <div className="w-full flex flex-col justify-center ml-6">
              {navItems.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg ${isActive ? " text-white font-bold" : ""}`
                  }
                  onClick={()=>setPathname(label)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
            <div className="fixed bottom-3 font-xl ">+</div>
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black p-4 flex gap-10 justify-around items-center border-t border-gray-800 overflow-x-scroll">
        {navItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center text-gray-400 ${isActive ? "text-white font-bold" : "hover:text-white"}`
            }
            onClick={()=>setPathname(label)}
          >
            {icon}
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
