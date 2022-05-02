import React, { FC } from "react"

interface SLAFormTableTableProps {
  data?: any
}

const SLAFormTableTable: FC<SLAFormTableTableProps> = ({ data }) => {
  return (
    <div className="mt-10">
      <h3>
        Preview
        <span className="text-gray">
          {" "}
          (<span className="text-gray text-sm">0</span> matches)
        </span>{" "}
      </h3>
      {!data ? (
        <div className="mt-3 text bg-lightgrey p-6">{`No Entries`}</div>
      ) : (
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200 border-b-[1px]">
                    <tr>
                      <th
                        scope="col"
                        className="text-left font-medium text-gray-500  min-w-[150px]"
                      >
                        Name
                      </th>
                      <th scope="col" className="text-right font-medium text-gray-500  ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Group Name 01</td>
                      <td className="text-right">
                        <span className={`icon-right`}>{``}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Group Name 02</td>
                      <td className="text-right">
                        <span className={`icon-right`}>{``}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SLAFormTableTable
