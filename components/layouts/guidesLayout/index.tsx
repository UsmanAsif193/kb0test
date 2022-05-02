import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { ASIDE_ACCORDIONS, GUIDES_MOST_POPULAR_TOPICS_ACCORDIONS } from "../../../constants/aside";
import { useOutSiteClick } from "../../../hooks/useOutsideClick";
import { SideBarTopic } from "../../../models/guides/SideBarTopic";
import { MenuItem } from "../../../models/layouts/MenuItem";
import Aside from "./Aside";
import Container from "./Container";

interface GuidesLayoutProps {
  //   sidebar: SideBarTopic[];
  children?: ReactNode;
}

const sidebar = GUIDES_MOST_POPULAR_TOPICS_ACCORDIONS;
const GuidesLayout: FC<GuidesLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<SideBarTopic>(
    sidebar.filter((item: any) =>
      router.pathname.toString().includes(item.main.link)
    )[0]
  );

  const handleMenu = (index: number) => {
    setSelectedTopic(
      sidebar.filter(
        (item: any) => item.main.link === router.asPath.toString()
      )[0]
    );
    router.push(sidebar[index].main.link);
  };

  useEffect(() => {}, []);

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [displaySigninModal, setDisplaySigninModal] = useState(false);
  const [displayArrow, setDisplayArrow] = useState(false);

  const asideRef = useRef(null);

  const handleMenuItem = (e: any, item: MenuItem) => {
    if (item.link === "/signin") {
      console.log("signin");
      handleSignIn();
    } else {
      Router.push(item.link);
    }
  };
  const handleSignIn = () => {
    setDisplaySigninModal(true);
  };
  const handleSiningClose = () => {
    setDisplaySigninModal(false);
  };

  const closeAside = () => {
    setToggleSidebar(false);
  };

  const openAside = () => {
    setToggleSidebar(true);
  };

  useOutSiteClick(asideRef, closeAside);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
  });

  return (
    <Container
      background={`bg-friendly-background-gray`}
      outerPadding={`pt-[1px] pb-[40px]`}
      innerPadding={`px-[0px] py-[0px]`}
    >
      <div className={`w-full flex flex-row`}>
        <div className="hidden lg:block max-w-[314px] min-w-[314px] pl-[20px] xl:pl-[0px] min-h-screen">
          <div
            className={`w-full flex flex-col pl-0 pt-[70px] pr-[54px]  min-w-full`}
          >
            <div className={`w-full flex flex-col`}>
              <h1 className={`text-friendly-title-gray`}>
                {"CHOOSE YOUR TOPIC"}
              </h1>
              <ul
                className={`w-full flex flex-col text-friendly-dark-gray font-montserrat font-semibold text-lg mb-[50px] `}
              >
                {sidebar.map((item: any, index: any) => (
                  <li
                    key={index}
                    className={`py-2`}
                    onClick={() => handleMenu(index)}
                  >
                    <span
                      className={`py-[5px] cursor-pointer hover:underline `}
                    >
                      {item.main.title}
                    </span>
                  </li>
                ))}
              </ul>
              {selectedTopic !== undefined ? (
                <>
                  <h1
                    className={`text-friendly-title-gray text-sm thinBorderBottom pb-4`}
                  >
                    {"THE MOST POPULAR GUIDES"}
                  </h1>
                  <ul
                    className={`flex flex-col text-friendly-link-gray font-montserrat font-semibold text-sm`}
                  >
                    {selectedTopic.popularTopics.map((item, index) => (
                      <Link
                        key={index}
                        href={`${selectedTopic.main.link}/${item.link.link}`}
                        passHref
                      >
                        <span
                          className={`py-[10px] cursor-pointer hover:underline ${
                            index < 0 && "thinBorderBottom"
                          }`}
                        >
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </ul>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className=" flex-grow flex flex-col bg-white p-[40px]">
          {children}
        </div>
      </div>

      <aside
        ref={asideRef}
        className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-500 z-50 ${
          toggleSidebar ? " translate-x-0 " : " -translate-x-full "
        }`}
      >
        <Aside accordions={ASIDE_ACCORDIONS} />
      </aside>
    </Container>
  );
};

export default GuidesLayout;
