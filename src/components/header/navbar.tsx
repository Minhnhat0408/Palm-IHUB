import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className=" text-md hidden items-center justify-between  bg-transparent py-5 md:text-[15px] lg:flex">
      <ul className={cn("flex uppercase tracking-widest gap-x-4")}>
        {routes.map((route, index) => (
          <li
            key={index}
            className={cn(
              " duration-1000 text-lg text-white/50  hover:text-white"
            )}
          >
            <a
              href={`${route.href}`}
              className={
                "px-5 py-2 font-bold " +
                (pathname.includes(route.href) ? "text-white" : "")
              }
            >
              {route.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
