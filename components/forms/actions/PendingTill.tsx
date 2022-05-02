import { FC, useState } from "react"
/* eslint-disable react-hooks/rules-of-hooks */
import Flatpickr from "react-flatpickr"
interface PendingTillProps {
  options: string[]
}

export const PendingTill: FC<PendingTillProps> = ({ options }) => {
  const [pendingTill, setPendingTill] = useState("Relative")

  return (
    <div className="flex flex-row">
      <select
        onChange={(e) => setPendingTill(e.target.value)}
        className="form-control block px-3 py-1.5  text-gray-700 bg-white h-[51px]
        transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
        // onChange={(e) => setPendingTill(e.target.value)}
      >
        {options?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      {pendingTill === "Relative" ? (
        <div className="flex flex-row">
          <div className="mx-2">
            <select
              onChange={(e) => setPendingTill(e.target.value)}
              className="form-control block  px-3 py-1.5  text-gray-700 bg-white h-[51px] 
        transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
              // onChange={(e) => setPendingTill(e.target.value)}
            >
              {Array.from(new Array(120), (item: string, index) => (
                <option>{index + 1}</option>
              ))}
            </select>
          </div>
          <div className="mx-2">
            <select
              onChange={(e) => setPendingTill(e.target.value)}
              className="form-control block  px-3 py-1.5  text-gray-700 bg-white h-[51px] 
       transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
            >
              <option>{`Minute(S)`}</option>
              <option>{`Hour(S)`}</option>
              <option>{`Day(S)`}</option>
              <option>{`Week(S)`}</option>
              <option>{`Month(S)`}</option>
              <option>{`Year(S)`}</option>
            </select>
          </div>
        </div>
      ) : (
        <div
          className={
            "text-darkgray min-h-[51] h-[51] bg-white mx-2 flex flex-row items-center px-3"
          }
        >
          <Flatpickr
            // options={{
            //   enableTime: true,
            //   noCalendar: true,
            //   dateFormat: "H:i",
            //   defaultDate: "13:45"
            // }}
            data-enable-time
            value={new Date()}
          />
        </div>
      )}
    </div>
  )
}
