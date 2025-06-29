import { BiTask } from "react-icons/bi";
function layout() {
  return (
    <>
        <nav className='fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md px-8 py-3 flex items-center justify-between border-teal-100'>
            <div className='flex items-center space-x-2 cursor-pointer select-none w-fit'>
                {/** logo */}
                <BiTask className="w-8 h-8 text-teal-600" />
                <span className="text-2xl font-extrabold text-teal-600 tracking-tight whitespace-nowrap">TaskNest</span>
            </div>
            <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm sm:text-base">
                {/* {[
                    { label: "Home", path: "/" },
                    { label: "Projects", path: "/projects" },
                    { label: "Task", path: "/task" },
                    { label: "About", path: "/about" },

                ].map(({ label, path }) => {
                    <li key={path}></li>
                    span
                })} */}
            </ul>
        </nav>
    </>
  )
}

export default layout
