import { FC } from "react"
import Input from "../common/Input"
import Picklist from "../common/Picklist"
import SwitchComponent from "../common/Switch"
import SLAFormTableTable from "../tables/SLAFormTable"
import SLATableTime from "../tables/SLATableTime"
import MacrosFormActions from "./MacrosFormActions"
import SLAFormActions from "./SLAFormActions "

interface formProps {
  formData?: any
}

const TriggerForm: FC<formProps> = ({ formData }) => {
  return (
    <>
      <div className="module-heading mb-3">New Trigger</div>
      <form onSubmit={() => console.log("hello")}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <Input title={"Name"} className={"my-4"} />
          </div>
        </div>

        <div className={`w-[80%] py-[30px] flex flex-col`}>
          <label>
            Conditions for affected objects <span>*</span>
          </label>
          <MacrosFormActions />
          <label className="mt-6">
            Execute changes on objects <span></span>
          </label>
          <SLAFormActions />
        </div>
        <div className={"flex flex-col justify-items-start items-start justify-start"}>
          <label htmlFor="title" className={"text-gray-700 font-medium"}>
            {`Active *`}
          </label>
          <SwitchComponent />
        </div>
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

export default TriggerForm
