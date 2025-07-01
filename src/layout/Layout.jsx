import { BiTask } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlices";
function layout({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth); // from the state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md px-8 py-3 flex items-center justify-between border-teal-100">
        <div className="flex items-center space-x-2 cursor-pointer select-none w-fit">
          {/** logo */}
          <BiTask className="w-8 h-8 text-teal-600" />
          <span className="text-2xl font-extrabold text-teal-600 tracking-tight whitespace-nowrap">
            TaskNest
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm sm:text-base">
          {[
            { label: "Home", path: "/" },
            { label: "Projects", path: "/projects" },
            { label: "Tasks", path: "/tasks" },
            { label: "About", path: "/about" },
            { contact: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="relative group transition duration-200"
              >
                <span className="hover:text-teal-600 transition">{label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        {isLoggedIn ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
            className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              Login
            </button>
          </Link>
        )}
      </nav>

      {/** Page Content */}
      <div className="pt-24 flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default layout;
