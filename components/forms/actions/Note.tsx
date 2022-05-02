import { MACROS } from "../../../constants/actions"
import Input from "../../common/Input"

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
