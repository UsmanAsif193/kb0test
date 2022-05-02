import { FC } from "react"
import Input from "../../common/Input"

interface TagsProps {
  tags?: string[]
}

export const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-row">
      <select
        className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white h-[51px]
        transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        {tags?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <div className="mx-2">
        <Input />
      </div>
    </div>
  )
}
