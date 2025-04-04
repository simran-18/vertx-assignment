import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import dashboard from "../assets/dashboard.png";
import connect from "../assets/connect.png";
import dealroom from "../assets/dealroom.png";
import analytics from "../assets/analytics.png";
import activity from "../assets/activity.png";
import user from "../assets/user.png";
import plus from "../assets/plus.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

const navItems = [
  { path: "/", label: "Dashboard", icon:dashboard },
  { path: "/analytics", label: "Analytics", icon: analytics },
  { path: "/connect", label: "Connect", icon: connect },
  { path: "/activity", label: "Activity", icon: activity },
  { path: "/dealroom", label: "Dealroom", icon:dealroom },
  { path: "/profile", label: "Profile", icon: dealroom }, //image is not in figma
  { path: "/settings", label: "Settings", icon: dealroom },//image is not in figma
];
const imgs=[
  {id:1,icon:profile1,alt:'profile1'},
  {id:2,icon:profile2,alt:'profile2'},
  {id:3,icon:profile3,alt:'profile3'},
]
function Sidebar() {
  const {setPathname}=useAppContext();
  const {pathname}=useLocation();
  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed inset-y-0 left-0 w-64 border-r-1 border-dark">
        <nav className="text-lightGray mt-12">
          <div className="flex w-full">
            <div className="border-r-1 border-dark h-screen  py-2 w-20 ">
              <div className="pb-2 border-b-1 border-dark">
             {pathname!=="/profile"?<img
              src={user}
              alt="Profile"
              className="h-12 w-12 "
              />:<>
              {imgs.map((img,_)=>
              {
                return <img
                src={img.icon}
                alt={img.alt}
                className="h-12 w-12 "
                />
              })}
              </>}
              </div>
              </div>
            <div className="w-full text-base flex flex-col justify-start ml-6 p-4">
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
            <div className="fixed bottom-3 left-1 text-white"><img src={plus} alt="plus" className="w-10 h-10"/></div>
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black z-[999] p-4 flex gap-10 justify-around items-center border-t border-gray-800 overflow-x-scroll">
        {navItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center text-lightGray ${isActive ? "text-white font-bold" : "hover:text-white"}`
            }
            onClick={()=>setPathname(label)}
          >
           <img src={icon} alt={label} className="h-8"/>
            <span className="text-xs text-white">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
