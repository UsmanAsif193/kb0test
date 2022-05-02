import { TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { FC } from "react";
import SwitchComponent from "../common/Switch";

interface TagsTableProps {}

const TagsTable: FC<TagsTableProps> = () => {
  return (
    <>
      <div className="module-heading mb-3">Tags</div>
      <div className="flex flex-row align-center">
        <SwitchComponent />
        <div className="font-medium ml-2 text-[17px]">New Tags</div>
      </div>
      <div className="text">Allow users to add new tags.</div>
      <br />
      <br />
      <div className="mt-8">
        <div className="font-medium text-[17px] mb-3">Manage Tags</div>
        <div className="p-4 shadow rounded-sm xl:w-1/2">
          <div className={`md:flex items-center`}>
            <div className={`md:basis-1/2`}>
              <div className="md:col-span-2 flex flex-row rounded-md overflow-hidden shadow-sm thinBorder ">
                <input
                  type="text"
                  className="py-2 mx-3 outline-none  w-full  h-[44px] rounded-br-md rounded-tr-md "
                />
              </div>
            </div>
            <div className={`w-full`}>
              <Link href={"/macros/add"}>
                <a>
                  <button className="ml-auto md:ml-3 flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen">
                    <span>{`ADD`}</span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="overflow-x-auto rounded-lg">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200 border-b-[1px]">
                    <tr>
                      <th
                        scope="col"
                        className="text-left font-medium text-gray-500 min-w-[150px]"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-left font-medium text-gray-500  min-w-[150px]"
                      >
                        Count
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
                      <td>Pedning Reached Tickets</td>
                      <td>121</td>
                      <td className="text-right">
                        <span className={`icon-right`}>
                          <TrashIcon
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

export default TagsTable;
