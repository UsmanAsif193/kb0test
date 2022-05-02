import { useState } from "react"
import Input from "../../common/Input"

export const Customer = () => {
  const [customer, setCustomer] = useState("Current User")
  return (
    <div className="flex flex-row">
      <select
        className="form-control block  w-[100px] px-3 py-1.5  ml-2 text-gray-700 bg-white h-[51px]
        transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`is`}</option>
        <option>{`is not`}</option>
      </select>
      <div className={`mx-2`}>
        <select
          className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white h-[51px]
             transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
          onChange={(e) => setCustomer(e.target.value)}
        >
          <option>{`Specific User`}</option>
          <option>{`Current User`}</option>
        </select>
      </div>
      {customer !== "Current User" && (
        <div className="">
          <Input />
        </div>
      )}
    </div>
  )
}
