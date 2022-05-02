import {
  DuplicateIcon,
  EyeIcon,
  PencilAltIcon,
  SearchIcon,
  TrashIcon
} from "@heroicons/react/outline"
import Link from "next/link"
import React, { FC, useState } from "react"
import ModalDescription from "../common/ModalDescription"

interface TriggersTableProps {}

const TriggersTable: FC<TriggersTableProps> = () => {
  const [displayListModal, setDisplayListModal] = useState(false)
  const handleListOPenModel = () => {
    setDisplayListModal(true)
  }
  const handleListModalClose = () => {
    setDisplayListModal(false)
  }
  return (
    <>
      <div className="module-heading mb-3">
        <h1>
          Triggers <small className="text-gray">Management</small>
        </h1>
      </div>
      <div className="p-4 shadow rounded-sm">
        <div className={`lg:flex lg:flex-row items-center justify-between`}>
          <div className={`grid md:grid-cols-3 lg:basis-1/2 basis-full gap-5 `}>
            <div className="md:col-span-2 flex flex-row rounded-md overflow-hidden shadow-sm thinBorder ">
              <button className="flex items-center justify-center px-1 border-r  border-none h-[44px]">
                <SearchIcon className={`h-5 w-5 text-gray-500 mx-2 cursor-pointer`} />
              </button>
              <input
                type="text"
                className="py-2  outline-none  w-full  h-[44px] rounded-br-md rounded-tr-md "
                placeholder={"Search for Overviews"}
              />
            </div>
          </div>
          <div className={`flex flex-row lg:basis-1/2 basis-full justify-end`}>
            <div className="flex flex-row">
              {" "}
              <button
                className={`flex items-center justify-center lg:my-0 my-3 px-6 text-lightBlack font-bold rounded-md overflow-hidden h-[44px]  shadow ml-3`}
                onClick={(e) => handleListOPenModel()}
              >{`Description`}</button>
              <Link href={"/triggers/add"}>
                <a>
                  <button
                    className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen ml-3`}
                  >{`New Trigger`}</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200 w-full border-b-[1px]">
                    <tr>
                      <th scope="col" className="text-left font-medium text-gray-500 min-w-[150px]">
                        Name
                      </th>

                      <th scope="col" className="w-[100px] text-center font-medium text-gray-500  ">
                        Delete
                      </th>
                      <th scope="col" className="w-[100px] text-center font-medium text-gray-500  ">
                        Clone
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{` auto reply (on follow-up of tickets)`}</td>
                      <td>
                        <div className="icon-center">
                          <TrashIcon className={`h-5 w-5 text-gray-500 mx-2 cursor-pointer`} />
                        </div>
                      </td>
                      <td>
                        <span className={`icon-center`}>
                          <DuplicateIcon
                            className={`h-5 w-5 text-gray-500 cursor-pointer`}
                            // onClick={() => navigateEdit(value, "edit")}
                          />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{` customer notification (on owner change)`}</td>
                      <td>
                        <div className="icon-center">
                          <TrashIcon className={`h-5 w-5 text-gray-500 mx-2 cursor-pointer`} />
                        </div>
                      </td>
                      <td>
                        <span className={`icon-center`}>
                          <DuplicateIcon
                            className={`h-5 w-5 text-gray-500 cursor-pointer`}
                            // onClick={() => navigateEdit(value, "edit")}
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
      <ModalDescription
        isOpen={displayListModal}
        openModalList={() => handleListOPenModel()}
        closeModalList={() => handleListModalClose()}
      />
    </>
  )
}

export default TriggersTable
