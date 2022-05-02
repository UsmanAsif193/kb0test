import Link from "next/link";
import React, { FC } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const Aside: FC<any> = ({ accordions }: any) => {
  return (
    <div className="w-full px-1 pt-16">
      <div className="w-full max-w-md p-2  px-4  mx-auto bg-white rounded-2xl">
        <button
          className={`bg-friendly-blue text-white px-3 py-1 mb-2 rounded-sm font-semibold font-mono`}
        >{`Join Friendly Squad`}</button>
        {accordions.map((accordion: any, index: any) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between py-3 w-full text-sm font-medium text-left active:bg-gray-300 ">
                  <h1 className={`text-gray-500`}>{accordion.title}</h1>
                  <Image
                    src={`/svg/chevron-down.svg`}
                    alt={"chevron"}
                    className={`${open ? "transform rotate-180" : ""} w-5 h-5 `}
                    width={20}
                    height={20}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {accordion.menu.map((item: any, i: any) => (
                    <ul key={i}>
                      <li className={`ml-5 mb-4`} key={item.title}>
                        <Link href={item.link}>
                          <a className={`text-gray-500`}>{item.title}</a>
                        </Link>
                      </li>
                    </ul>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Aside;
