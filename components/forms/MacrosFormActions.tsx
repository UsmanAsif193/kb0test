/* eslint-disable react-hooks/rules-of-hooks */
import Flatpickr from "react-flatpickr"
import { useState } from "react"
import Dropdown from "../common/Dropdown"
import Input from "../common/Input"

interface formProps {
  formData?: any
}

export const Title = () => {
  return (
    <div className={`mx-2`}>
      <Input />
    </div>
  )
}
export const Group = () => {
  return (
    <div className={`mx-2`}>
      <select
        className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white h-[51px]
      transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`Users`}</option>
      </select>
    </div>
  )
}

export const Customer = () => {
  const [customer, setCustomer] = useState("Current User")
  return (
    <div className="flex flex-row">
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

export const Owner = () => {
  const [customer, setCustomer] = useState("Current User")
  return (
    <div className="flex flex-row">
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
        <div className="mx-2">
          <Input />
        </div>
      )}
    </div>
  )
}
export const Priority = () => {
  return (
    <div className={``}>
      <select
        className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white h-[51px]
      transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`Low`}</option>
        <option>{`Normal`}</option>
        <option>{`Hight`}</option>
      </select>
    </div>
  )
}

export const Tags = () => {
  return (
    <div className="flex flex-row">
      <select
        className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white h-[51px]
      transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`Add`}</option>
        <option>{`Remove`}</option>
      </select>
      <div className="mx-2">
        <Input />
      </div>
    </div>
  )
}

export const Note = () => {
  return (
    <form className="white flex flex-col">
      <div className="my-2">
        <select
          className="form-control block col-span-1 px-3 py-1.5  text-gray-700 bg-white h-[51px]
                  transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
        >
          {MACROS?.map((value: any, index: number) => (
            <option className="h-8" key={index}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="my-1">
        <Input title={"SUBJECT"} className={""} />
      </div>
      <div className="form-floating my-4 ">
        <textarea
          className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white
                     transition ease-in-out h-10  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-lightgreen"
          id="note"
          placeholder="Note"
        ></textarea>
        <label htmlFor="note" className="text-gray-700">
          {`Body`}
        </label>
      </div>
    </form>
  )
}

export const PendingTill = () => {
  const [pendingTill, setPendingTill] = useState("Relative")

  return (
    <div className="flex flex-row">
      <select
        onChange={(e) => setPendingTill(e.target.value)}
        className="form-control block px-3 py-1.5  text-gray-700 bg-white h-[51px]
      transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
        // onChange={(e) => setPendingTill(e.target.value)}
      >
        <option>{`Relative`}</option>
        <option>{`Static`}</option>
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
          <Flatpickr data-enable-time value={new Date()} />
        </div>
      )}
    </div>
  )
}

export const MACROS = [
  "State",
  "Title",
  "Group",
  "Customer",
  "Owner",
  "Pending till",
  "Priority",
  "Tags",
  "Note",
  ""
]
const MacrosFormActions = () => {
  const [inputFields, setInputFields] = useState([MACROS[0]])
  const handleAdd = (input: string) => {
    setInputFields([...inputFields, input])
  }
  const renderSwitchActions = (param: string, index: number) => {
    // setInputFields([MACROS[index + 1]])
    switch (param) {
      case "State":
        return "State"
      case "Title":
        return <Title />
      case "Group":
        return <Group />
      case "Customer":
        return <Customer />
      case "Owner":
        return <Owner />
      case "Priority":
        return <Priority />
      case "Tags":
        return <Tags />
      case "Note":
        return <Note />
      case "Pending till":
        return <PendingTill />
      default:
        return "default"
    }
  }

  const handleRemove = (input: string) => {
    let formData = inputFields
    const index = formData.indexOf(input)
    console.log("index is ", index)
    formData.splice(index, 1)

    console.log("form Data", formData)

    setInputFields([...formData])
  }
  return (
    <div className={""}>
      {inputFields.map((item, index) => (
        <div
          key={index}
          className={`w-full items-center flex flex-row justify-between bg-lightgrey h-fit shadow-sm p-4 my-2`}
        >
          <div className={`w-[70%] grid grid-cols-3 gap-3 items-center `}>
            <select
              className="form-control block col-span-1 px-3 py-1.5  text-gray-700 bg-white h-[51px]
                  transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
              value={[MACROS[index + 1]] || ""}
            >
              {MACROS?.map((value: any, index: number) => (
                <option className="h-8" key={index}>
                  {value}
                </option>
              ))}
            </select>
            <div className="col-span-2">{renderSwitchActions(MACROS[index + 1], index)}</div>
          </div>
          <div className="pl-4">
            <button
              className="inline-flex items-center justify-center w-6 h-6 mr-2 text-pink-100 transition-colors duration-150 bg-primarygreen rounded-full focus:shadow-outline hover:bg-tint hover:text-lightgreen"
              onClick={(e) => handleRemove(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-6 h-6 mr-2 text-pink-100 transition-colors duration-150 bg-primarygreen rounded-full focus:shadow-outline hover:bg-tint hover:text-lightgreen"
              onClick={(e) => handleAdd("Title")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={(e) => {}}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MacrosFormActions
