import { FC, useState } from "react"
import Input from "../common/Input"
import Picklist from "../common/Picklist"
import SwitchComponent from "../common/Switch"
import MacrosFormActions from "./MacrosFormActions"

interface formProps {
  formData?: any
}

const MacrosForm: FC<formProps> = ({ formData }) => {
  return (
    <>
      <div className="module-heading mb-3">Create macros</div>
      <form onSubmit={() => console.log("hello")}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <Input title={"Name"} className={"my-4"} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div className="form-floating my-4 ">
              <textarea
                className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white 
                     transition ease-in-out h-10  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-lightgreen"
                id="note"
                placeholder="Note"
              ></textarea>
              <label htmlFor="note" className="text-gray-700">
                {`Note`}
              </label>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div className={`form-floating my-4`}>
              <select
                className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white 
                  transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
              >
                <option>Close tab</option>
              </select>
              <label htmlFor="title" className={"text-gray-700 font-medium"}>
                {`Once completed*`}
              </label>
            </div>
          </div>
          <div>
            <div className={`form-floating my-4`}>
              <select
                className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white 
                  transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
              >
                <option>Group 01</option>
              </select>
              <label htmlFor="title" className={"text-gray-700 font-medium"}>
                {`Groups`}
              </label>
            </div>
          </div>
        </div>
        <div className={`w-[80%] py-[30px] flex flex-col`}>
          <label>{`ACTIONS`}</label>
          <MacrosFormActions />
          <Picklist title="GROUPS" />
        </div>
        <div className={"flex flex-col justify-items-start items-start justify-start"}>
          <label htmlFor="title" className={"text-gray-700 font-medium"}>
            {`Active *`}
          </label>
          <SwitchComponent />
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

export default MacrosForm
