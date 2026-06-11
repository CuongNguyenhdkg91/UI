"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { verifyAuth } from "./action";

import { UserMenu} from "../UserMenu";
import type {MenuItem} from "../UserMenu";

interface Headings{
  title: string
  url: string
  check?: any
}

const Navbar = ({headings,burMenu}:{headings: Headings[], burMenu: MenuItem[]}) => {
  const router = useRouter();
  const auth = (url:string) => {
    verifyAuth().then((isAuth) => {
                      if (isAuth) {
                        router.push(url);
                      } else {
                        router.push("/Login");
                      }
                    });
  }

  
  return (
    <div
      id="wrap-navbar"
      className="sticky top-0 py-3 px-4 h-20 bg-[#162147] text-white z-10 shadow-sm"
    >
      <div id="wrap-flexItem" className="h-full flex flex-row items-center justify-between mx-auto md:gap-3">
        <div className="flex gap-10">
        {/*Logo*/}
          <Link href="/" aria-label="go to homepage">
            <Image
              src="/PageAsset/logoMC.png"
              width="62"
              height="45"
              alt="Logo SEO"
              className="block cursor-pointer"
            />
            {/* if use Image of next the optimization may make not update in dev env */}
            {/* create symbol instead of using original image */}
          </Link>

          {/* Desktop Links */}
          <div id="navigation-mid" className="hidden md:flex">
            <ul className="flex items-center gap-10 list-none no-underline">
              {headings.map((header) => {
                return(
                  <li onClick={()=>{
                    if(header.check !== undefined){
                      auth(header.url)
                    }
                  }}>
                      <Link href={header.url}>{header.title}</Link>
                  </li>
                )
              })}
              
              <li>
                <Link href="/Gallery"> Gallery </Link>
              </li>
              <li>
                <Link href="About"> About </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="navigation-login" className="hidden md:flex">
          <div className="flex items-center gap-4">
              <Link href="./Login" className="w-[70px] py-2 text-center rounded-xl bg-[#5E70E4] hover:bg-[#4B5BBF] transition">
                  Login
              </Link>
              <Link href="./Register">Create Account </Link>
          </div>
        </div>
        <UserMenu burMenu={burMenu}/>
      </div>
    </div>
  );
};

export default Navbar;
