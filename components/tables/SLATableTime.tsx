import React, { FC, useState } from "react"
import Flatpickr from "react-flatpickr"
import CheckBox from "../common/CheckBox"
import Input from "../common/Input"
import RadioButton from "../common/RadioButton"

interface SLATableTimeProps {
  data?: any
}

const SLATableTime: FC<SLATableTimeProps> = ({ data }) => {
  // const [date, setDate] = useState(new TimeRanges())
  return (
    <div className="mt-10">
      <h3>SLA Times</h3>
      <div className="flex flex-col mt-3">
        <div className="overflow-x-auto rounded-lg">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200 border-b-[1px]">
                  <tr>
                    <th scope="col" className="text-left font-medium text-gray-500 min-w-[50px]">
                      Active
                    </th>
                    <th scope="col" className="text-left font-medium text-gray-500  ">
                      Type
                    </th>
                    <th scope="col" className="text-right font-medium text-gray-500  ">
                      Time in hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="thinBorderBottom">
                    <td className="max-w-[50px]">
                      <CheckBox />
                    </td>
                    <td className="flex flex-col">
                      First Response Time
                      <span className="text-gray text-sm">{`Timeframe for the first response.`}</span>
                    </td>
                    <td className="">
                      <div className="w-full flex flex-row justify-end">
                        <div className="w-[80px]">
                          <Flatpickr
                            className="w-[80px]"
                            // ref={datepickerRef}
                            options={{
                              enableTime: true,
                              noCalendar: true,
                              dateFormat: "H:i",
                              defaultDate: "13:45"
                            }}
                            value={"09:30"}
                            // onChange={(date, dateStr) => {
                            //   let selectedDate = date[0]
                            //   let currentDate = new Date()
                            //   var currentTime = new Date(
                            //     selectedDate.setHours(
                            //       currentDate.getHours(),
                            //       currentDate.getMinutes(),
                            //       currentDate.getSeconds()
                            //     )
                            //   )
                            //   setDate(currentTime)
                            // }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* -------------- */}
                  <tr className="thinBorderBottom">
                    <td className="max-w-[50px]">
                      <CheckBox />
                    </td>
                    <td className="flex flex-col">
                      Update Time
                      <span className="text-gray text-sm">{`Timeframe for the first response.`}</span>
                      <RadioButton title={"between agent updates"} />
                      <RadioButton title={"for an agent to respond"} />
                    </td>
                    <td className="">
                      <div className="w-full flex flex-row justify-end">
                        <div className="w-[80px]">
                          <Flatpickr
                            className="w-[80px]"
                            // ref={datepickerRef}
                            options={{
                              enableTime: true,
                              noCalendar: true,
                              dateFormat: "H:i",
                              defaultDate: "13:45"
                            }}
                            value={"09:30"}
                            // onChange={(date, dateStr) => {
                            //   let selectedDate = date[0]
                            //   let currentDate = new Date()
                            //   var currentTime = new Date(
                            //     selectedDate.setHours(
                            //       currentDate.getHours(),
                            //       currentDate.getMinutes(),
                            //       currentDate.getSeconds()
                            //     )
                            //   )
                            //   setDate(currentTime)
                            // }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* -------------- */}
                  <tr className="thinBorderBottom">
                    <td className="max-w-[50px]">
                      <CheckBox />
                    </td>
                    <td className="flex flex-col">
                      Solution Time
                      <span className="text-gray text-sm">{`Timeframe for solving the problem.`}</span>
                    </td>
                    <td className="">
                      <div className="w-full flex flex-row justify-end">
                        <div className="w-[80px]">
                          <Flatpickr
                            className="w-[80px]"
                            // ref={datepickerRef}
                            options={{
                              enableTime: true,
                              noCalendar: true,
                              dateFormat: "H:i",
                              defaultDate: "13:45"
                            }}
                            value={"09:30"}
                            // onChange={(date, dateStr) => {
                            //   let selectedDate = date[0]
                            //   let currentDate = new Date()
                            //   var currentTime = new Date(
                            //     selectedDate.setHours(
                            //       currentDate.getHours(),
                            //       currentDate.getMinutes(),
                            //       currentDate.getSeconds()
                            //     )
                            //   )
                            //   setDate(currentTime)
                            // }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SLATableTime
