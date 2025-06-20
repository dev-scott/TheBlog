"use client";
import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;
const DesktopNavbar = (props: Props) => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // const pathname = usePathname();
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  // const isScrollDown = scrollPosition > 10;
  // const isHome = pathname === "/";
  return (
    <nav
      className={cn(
        "hidden fixed transition-colors w-full z-50  top-0 md:block bg-white text-gray-700 ",
      )}
    >
      <div className="flex mx-auto font-bold justify-between items-center  py-4 container">
        {props.children}
      </div>
      <hr className="border-b border-gray-500 opacity-25 " />
    </nav>
  );
};

export default DesktopNavbar;
