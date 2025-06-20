import { getSession } from "@/lib/session";
import Link from "next/link";
import SignInPanel from "./signInPanel";
import Profile from "./Profile";

type Props = {};
const Navbar = async (props: Props) => {
  const session = await getSession();
  return (
    <>
      <h1 className="text-2xl font-bold tracking-wider  p-2  ">
        The<span className="text-primary">Blog</span>
      </h1>
      <div className="  px-2   flex flex-col md:flex-row gap-14 md:items-center md:justify-between ">
        <Link href="/" className="">
          Blogs
        </Link>
        <Link href="#about" className="">
          About us
        </Link>
        <Link href="#contact" className="">
          Contact us
        </Link>
      </div>
      <div>
        {session && session.user ? (
          <Profile user={session.user} />
        ) : (
          <SignInPanel />
        )}
      </div>
    </>
  );
};

export default Navbar;
