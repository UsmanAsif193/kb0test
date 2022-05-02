import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CogIcon,
  LogoutIcon,
  PencilAltIcon,
  SearchIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, Fragment } from "react";
import { usePage } from "../../context/PageContext";

interface HeaderProps {
  baseUrl: any;
  onClick: any;
  activeUrl?: any;
  siderbarOpen?: any;
  setSiderbarOpen?: any;
}

const Header: FC<HeaderProps> = ({
  siderbarOpen,
  setSiderbarOpen,
  baseUrl,
  activeUrl,
  onClick,
}: HeaderProps) => {
  const router = useRouter();
  const { link, subLink, setPageData }: any = usePage();
  const navigate = () => {
    setPageData({ link: null, subLink: null });
    router.push("/knowledge-base/kb");
  };
  const handleSidebar = () => {
    setSiderbarOpen(true);
  };
  return (
    <header className="header bg-white shadow py-4 px-6 sticky top-0 z-50">
      <div className="header-content flex items-center flex-row">
        <button
          type="button"
          className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div className="flex-1 flex flex-row justify-start items-center">
          <span
            onClick={navigate}
            className={` ${
              link ? " text-black " : "text-lightgreen"
            } hover:underline cursor-pointer`}
          >
            {baseUrl.label}
          </span>
          {link && (
            <>
              <ChevronRightIcon
                className={`h-5 w-5 text-gray-500 cursor-pointer mx-1`}
              />
              <span className={` text-lightgreen  cursor-auto`}>
                {link.title}
              </span>
            </>
          )}
          {subLink?.title && (
            <>
              <ChevronRightIcon
                className={`h-5 w-5 text-gray-500 cursor-pointer mx-1`}
              />
              <span className={` text-lightgreen  cursor-auto`}>
                {subLink.title}
              </span>
            </>
          )}
        </div>
        <div className="align-center flex ml-auto">
          <div className="flex flex-row rounded-md shadow-sm thinBorder mr-4">
            <button className="flex items-center justify-center px-1 border-r  border-none ">
              <SearchIcon
                className={`h-5 w-5 text-gray-500 mx-2 cursor-pointer`}
              />
            </button>
            <input
              type="text"
              className="py-2  outline-none  w-full rounded-br-md rounded-tr-md "
              placeholder={"Search for name"}
            />
          </div>

          <button type="button">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <div className="ml-3 relative">
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button>
                    <span className="sr-only">Open Profile menu</span>
                    <div className="h-8 w-8 rounded-full">
                      <img
                        src={"/images/people/profile.jpeg"}
                        className="h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-3 py-3">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={'/profile'}>
                            <a>
                              <button
                                className={`${
                                  active
                                    ? "bg-slate-200 text-gray-200"
                                    : "text-gray-900"
                                } group flex rounded-md items-center w-full px-2 py-3 z text-sm`}
                              >
                                {active ? (
                                  <UserIcon
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <UserIcon
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                )}
                                Profile
                              </button>
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-slate-200 text-gray-200"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-3 text-sm`}
                          >
                            {active ? (
                              <CogIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            ) : (
                              <CogIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            )}
                            Settings
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-slate-200 text-gray-200"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-3 text-sm`}
                          >
                            {active ? (
                              <LogoutIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            ) : (
                              <LogoutIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                            )}
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
