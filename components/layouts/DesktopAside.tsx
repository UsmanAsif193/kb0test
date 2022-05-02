import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from "next/router";
interface AsideProps {
  menu: any[];
}
const DesktopAside: FC<AsideProps> = ({ menu }: AsideProps) => {
  const router = useRouter();

  return (
    <aside className="fixed hidden z-20 h-full top-0 left-0 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
      <div className="relative flex-1 flex flex-col min-h-0 border-r pt-0 bg-slate-200">
        <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            <a className="flex items-center lg:ml-2.5 mt-4 mb-5">
              <img
                src="/svg/logo-black.svg"
                className="h-8 mr-2"
                alt="Windster Logo"
              />
            </a>
            <ul className="space-y-2 pb-2">
              <li className="mb-6">
                <select className="block border-b-[1px] dark:border-gray-600 p-2.5 rounded-lg w-full text-[17px]">
                  <option>Knowledge Base</option>
                  <option>Help Desk</option>
                </select>
              </li>

              <li>
                <Link href="/knowledge-base/kb">
                  <a
                    className={
                      router.pathname == "/knowledge-base/kb"
                        ? "text-lightgreen font-normal rounded-lg flex items-center p-2  bg-tint"
                        : "text-gray-700 font-normal rounded-lg flex items-center p-2  hover:bg-tint hover:text-lightgreen "
                    }
                  >
                    <svg
                      className="w-6 h-6 flex-shrink-0 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      {"Knowledge Base"}
                    </span>
                    <span className="bg-gray-200 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
                      12
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DesktopAside;
