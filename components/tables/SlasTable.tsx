import { PencilAltIcon, SearchIcon } from "@heroicons/react/outline"
import Link from "next/link"
import React, { FC, useState } from "react"
import ModalDescription from "../common/ModalDescription"

interface SlasTableProps {}

const SlasTable: FC<SlasTableProps> = () => {
  const [displayListModal, setDisplayListModal] = useState(false)
  const handleListOPenModel = () => {
    setDisplayListModal(true)
  }
  const handleListModalClose = () => {
    setDisplayListModal(false)
  }
  return (
    <>
      <div className="flex flex-row justify-between item-center">
        <div className="module-heading mb-3">SLA Management</div>
        <div className="flex flex-row">
          {" "}
          <button
            className={`flex items-center justify-center lg:my-0 my-3 px-6 text-lightBlack font-bold rounded-md overflow-hidden h-[44px]  shadow ml-3`}
            onClick={(e) => handleListOPenModel()}
          >{`Description`}</button>
          <Link href={"/slas/add"}>
            <a>
              <button
                className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen ml-3`}
              >{`New SLA`}</button>
            </a>
          </Link>
        </div>
      </div>

      <div className="font-medium mb-7 w-[90%]">
        {`Service Level Agreements , abbreviated SLAs , help you to meet specific
        response times for your customers' requests. This way you can define
        goals such as answering every inquiry within eight hours. If you are at
        risk of missing this target, Zammad will alert you.
        <br />
        You can define targets for three different metrics: response time (time
        between the creation of a ticket and the first reaction of an agent),
        update time (time between a customer's request and an agent's reaction),
        and solution time (time between creating and closing a ticket).
        <br />
        Any escalated tickets (i.e. tickets that have missed the defined target)
        are displayed in a separate view in your overviews. You can also
        configure email notifications.`}
      </div>
      <div className="p-4 shadow rounded-sm mb-5">
        <div className="sla md:w-[90%]">
          <div className="sla-name text-2xl font-medium mb-3">New Sla</div>
          <div className="flex flex-row justify-between mb-4">
            <div className="filter text-1xl">
              <div className="heading font-medium text-slate-400">FILTER</div>
              <div className="escalation-times">
                Where <b>{"Ticket -> State"}</b> is open.
              </div>
            </div>
            <div className="filter text-1xl">
              <div className="heading font-medium text-slate-400">ESCALATION TIMES</div>
              <div className="escalation-times">02:00 hours - First Response Time</div>
            </div>
          </div>
          <div className="filter text-1xl">
            <div className="heading font-medium text-slate-400">CALENDAR</div>
            <div className="escalation-times">Norway - Europe/Oslo</div>
          </div>
        </div>
        <br />
        <div className={"flex flex-row justify-end"}>
          <button
            className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-red-500 ml-3`}
          >{`Archive`}</button>
          <button
            className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen ml-3`}
          >{`Edit`}</button>
        </div>
      </div>
      <div className="p-4 shadow rounded-sm mb-5">
        <div className="sla md:w-[90%]">
          <div className="sla-name text-2xl font-medium mb-3">New Sla 02</div>
          <div className="flex flex-row justify-between mb-4">
            <div className="filter text-1xl">
              <div className="heading font-medium text-slate-400">FILTER</div>
              <div className="escalation-times">
                Where <b>{"Ticket -> State"}</b> is open.
              </div>
            </div>
            <div className="filter text-1xl">
              <div className="heading font-medium text-slate-400">ESCALATION TIMES</div>
              <div className="escalation-times">02:00 hours - First Response Time</div>
            </div>
          </div>
          <div className="filter text-1xl">
            <div className="heading font-medium text-slate-400">CALENDAR</div>
            <div className="escalation-times">Norway - Europe/Oslo</div>
          </div>
        </div>
        <br />
        <div className={"flex flex-row justify-end"}>
          <button
            className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-red-500 ml-3`}
          >{`Archive`}</button>
          <button
            className={`flex items-center justify-center lg:my-0 my-3 px-6 text-white font-bold rounded-md overflow-hidden h-[44px] bg-primarygreen ml-3`}
          >{`Edit`}</button>
        </div>
      </div>
      <ModalDescription
        isOpen={displayListModal}
        openModalList={() => handleListOPenModel()}
        closeModalList={() => handleListModalClose()}
      />
    </>
  )
}

export default SlasTable
