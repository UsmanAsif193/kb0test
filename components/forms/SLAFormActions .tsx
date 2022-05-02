/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import { SLA } from "../../constants/actions"
import { Customer } from "./actions/Customer"
import { Group } from "./actions/Group"
import { Note } from "./actions/Note"
import { Organization } from "./actions/Organization"
import { Owner } from "./actions/Owner"
import { PendingTill } from "./actions/PendingTill"
import { Priority } from "./actions/Priority"
import { State } from "./actions/State"
import { Tags } from "./actions/Tags"
import { Title } from "./actions/Title"
import { Type } from "./actions/Type"

interface formProps {
  formData?: any
}
const tags = ["contains one", "contains all", "contains all not", "contains all"]
const options = [
  "before (absolute)",
  "after (absolute)",
  "before (relative)",
  "after (relative)",
  "within next (relative)",
  "within last (relative)",
  "till (relative)",
  "from (relative)"
]
const SLAFormActions = () => {
  const [inputFields, setInputFields] = useState([SLA[0]])
  const handleAdd = (input: string) => {
    setInputFields([...inputFields, input])
  }
  const renderSwitchActions = (param: string, index: number) => {
    // setInputFields([MACROS[index + 1]])
    switch (param) {
      case "State":
        return <State />
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
        return <Tags tags={tags} />
      case "Note":
        return <Note />
      case "Pending till":
        return <PendingTill options={options} />
      case "Organization":
        return <Organization />
      case "Type":
        return <Type />
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
              value={[SLA[index + 1]] || ""}
            >
              {SLA?.map((value: any, index: number) => (
                <option className="h-8" key={index}>
                  {value}
                </option>
              ))}
            </select>
            <div className="col-span-2">{renderSwitchActions(SLA[index + 1], index)}</div>
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

export default SLAFormActions
