import { TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { FC } from "react";
import SwitchComponent from "../common/Switch";

interface CalendarActionTableProps {}

const CalendarActionTable: FC<CalendarActionTableProps> = () => {
  return (
    <>
      <div className="module-heading mb-3">Calendar Management</div>
      <div className="mt-8">
        <div className="p-4 shadow overflow-x-auto mb-6">
          <div className="font-medium mb-4 text-2xl text-darkgray flex align">
            <div className="kb-calendar-status"></div>
            <div className="text">Norway</div>
          </div>
          <div className="font-medium text-[11px] text-darkgray time-zone">
            TIME ZONE
          </div>
          <div className="font-medium text-[11px] text-black zone">
            Europe/Oslo
          </div>
          <br />
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200 border-b-[1px]">
              <tr>
                <th
                  scope="col"
                  className="text-left w-64 font-medium text-gray-500 min-w-[150px]"
                >
                  BUSINESS HOURS
                </th>
                <th scope="col"></th>
                <th
                  scope="col"
                  className="text-left w-64 font-medium text-gray-500  "
                >
                  HOLIDAYS
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>09:00-17:00</td>
                <td>01/05/2022</td>
                <td>Labor day</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>09:00-17:00</td>
                <td>01/05/2022</td>
                <td>Labor day</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>09:00-17:00</td>
                <td>01/05/2022</td>
                <td>Labor day</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div
            className={
              "flex flex-row justify-end border-t-[1px] lg:p-5 border-t-gray lg:mt-5"
            }
          >
            <button className={`deleteButton mx-2`}>{`Archive`}</button>
            <button
              className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen ml-3`}
            >{`Edit`}</button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="p-4 shadow overflow-x-auto mb-6">
          <div className="font-medium mb-4 text-2xl text-darkgray flex align">
            <div className="kb-calendar-status"></div>
            <div className="text">Norway</div>
          </div>
          <div className="font-medium text-[11px] text-darkgray time-zone">
            TIME ZONE
          </div>
          <div className="font-medium text-[11px] text-black zone">
            Europe/Oslo
          </div>
          <br />
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200 border-b-[1px]">
              <tr>
                <th
                  scope="col"
                  className="text-left w-64 font-medium text-gray-500 min-w-[150px]"
                >
                  BUSINESS HOURS
                </th>
                <th scope="col"></th>
                <th
                  scope="col"
                  className="text-left w-64 font-medium text-gray-500  "
                >
                  HOLIDAYS
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>09:00-17:00</td>
                <td>01/05/2022</td>
                <td>Labor day</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>09:00-17:00</td>
                <td>01/05/2022</td>
                <td>Labor day</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>09:00-17:00</td>
                <td>01/05/2022</td>
                <td>Labor day</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div
            className={
              "flex flex-row justify-end border-t-[1px] lg:p-5 border-t-gray lg:mt-5"
            }
          >
            <button className={`deleteButton mx-2`}>{`Archive`}</button>
            <button
              className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen ml-3`}
            >{`Edit`}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarActionTable;
