import { PencilAltIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { FC } from "react";

interface MacrosTableProps {}

const MacrosTable: FC<MacrosTableProps> = () => {
  return (
    <>
      <div className="module-heading mb-3">Macros</div>
      <div className="font-medium mb-7 w-[90%]">
        Macros make it easy to automate common, multi-step tasks within Zammad.
        <br />
        You can use macros in Zammad to automate recurring sequences, saving
        time (and nerves). This allows a combined sequence of actions on the
        ticket to be executed with just one click.
      </div>
      <div className="p-4 shadow rounded-sm">
        <div className={`lg:flex lg:flex-row items-center justify-between`}>
          <div className={`grid md:grid-cols-3 lg:basis-1/2 basis-full gap-5 `}>
            <div className="md:col-span-2 flex flex-row rounded-md overflow-hidden shadow-sm thinBorder ">
              <button className="flex items-center justify-center px-1 border-r  border-none h-[44px]">
                <SearchIcon
                  className={`h-5 w-5 text-gray-500 mx-2 cursor-pointer`}
                />
              </button>
              <input
                type="text"
                className="py-2  outline-none  w-full  h-[44px] rounded-br-md rounded-tr-md "
                placeholder={"Search for Macros"}
              />
            </div>
          </div>
          <div className={`flex flex-row lg:basis-1/2 basis-full justify-end`}>
            <Link href={"/macros/add"}>
              <a>
                <button className="flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen">
                  <span>{`ADD`}</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200 border-b-[1px]">
                    <tr>
                      <th
                        scope="col"
                        className="text-left font-medium text-gray-500 "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-left font-medium text-gray-500  min-w-[150px]"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-left font-medium text-gray-500  min-w-[150px]"
                      >
                        Note
                      </th>
                      <th
                        scope="col"
                        className="text-left font-medium text-gray-500  min-w-[150px]"
                      >
                        Groups
                      </th>
                      <th
                        scope="col"
                        className="text-right font-medium text-gray-500  "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Close and tag as spam 01</td>
                      <td>Lorem ipsum</td>
                      <td>__</td>
                      <td className="text-right">
                        <span className={`icon-right`}>
                          <PencilAltIcon
                            className={`h-5 w-5 text-gray-500 cursor-pointer`}
                          />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Close and tag as spam 02</td>
                      <td>Lorem ipsum</td>
                      <td>__</td>
                      <td className="text-right">
                        <span className={`icon-right`}>
                          <PencilAltIcon
                            className={`h-5 w-5 text-gray-500 cursor-pointer`}
                          />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacrosTable;
