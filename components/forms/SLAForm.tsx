import { FC } from "react"
import Input from "../common/Input"
import Picklist from "../common/Picklist"
import SwitchComponent from "../common/Switch"
import SLAFormTableTable from "../tables/SLAFormTable"
import SLATableTime from "../tables/SLATableTime"
import SLAFormActions from "./SLAFormActions "

interface formProps {
  formData?: any
}

const SLAForm: FC<formProps> = ({ formData }) => {
  return (
    <>
      <div className="module-heading mb-3">New SLA</div>
      <form onSubmit={() => console.log("hello")}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <Input title={"Name"} className={"my-4"} />
          </div>
        </div>

        <div className={`w-[80%] py-[30px] flex flex-col`}>
          <label>Actions</label>
          <SLAFormActions />

          <SLAFormTableTable />
        </div>

        <div className={`form-floating my-4 lg:w-[50%]`}>
          <select
            className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white 
                  transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
          >
            <option>Norway-Europe/Oslo</option>
          </select>
          <label htmlFor="title" className={"text-gray-700 font-medium"}>
            {`Calendar `}
          </label>

          <SLATableTime />
        </div>
        <br />
      </form>
      <div className={`p-4 pb-0 flex flex-row-reverse mt-5`}>
        <button
          className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen`}
        >{`Save`}</button>
        {formData && <button className={`deleteButton mx-2`}>{`Archive`}</button>}
      </div>
    </>
  )
}

export default SLAForm
