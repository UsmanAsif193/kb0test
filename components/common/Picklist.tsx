/* This example requires Tailwind CSS v2.0+ */
import { FC, useState } from "react"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

interface DropdownProps {
  title?: string
  className?: string
  value?: string
  borderStyle?: string
}
export const USERS = ["User1", "User2", "User3", "User4"]
const Picklist: FC<DropdownProps> = ({ title, value, className, borderStyle }: DropdownProps) => {
  const [inputGroupOne, setInputGroupOne] = useState([USERS[0], USERS[2]])
  const [inputGroupTwo, setInputGroupTwo] = useState([USERS[1]])
  const handleGroupOne = (input: string) => {
    let formData = inputGroupOne
    const index = formData.indexOf(input)
    console.log("index is ", index)
    formData.splice(index, 1)

    console.log("form Data", formData)

    setInputGroupOne([...formData])

    setInputGroupTwo([...inputGroupTwo, input])
  }
  const handleGroupTwo = (input: string) => {
    //   Add To Group one
    setInputGroupOne([...inputGroupOne, input])
    // Remove From Group Two
    let formData = inputGroupTwo
    const index = formData.indexOf(input)
    console.log("index is ", index)
    formData.splice(index, 1)
    setInputGroupTwo([...formData])
  }
  return (
    <div className="flex flex-col my-10">
      <label>{title}</label>
      <div className="grid grid-cols-4 relative  text-left w-full h-56 thinBorder">
        <div className="flex flex-col col-span-3 bg-white">
          {inputGroupOne.map((item, index) => (
            <span
              key={index}
              className="hover:bg-lightgrey hover:w-[95%] w-full h-7 px-2 m-3 py-1 focus:bg-lightgrey"
              onClick={(e) => handleGroupOne(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col col-span-1 bg-lightgrey">
          {inputGroupTwo.map((item, index) => (
            <span
              key={index}
              className="hover:bg-gray hover:w-[95%] w-full h-7 m-3 px-2 py-1 focus:bg-gray"
              onClick={(e) => handleGroupTwo(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Picklist
