import { Dialog, Transition } from "@headlessui/react"
import { FC, Fragment } from "react"

export interface ModalTimingProps {
  isOpen: boolean
  closeModalList: any
  openModalList: any
}
const options = ["Now", "Schedule For"]
const ModalDescription: FC<ModalTimingProps> = ({
  isOpen,
  closeModalList,
  openModalList
}: ModalTimingProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModalList}>
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 top-0" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md  overflow-hidden text-left align-middle transition-all transform shadow-xl ">
                <div className="bg-white shadow sm:rounded-lg sm:px-10">
                  <div className={`w-full flex flex-row justify-between py-3 `}>
                    <h4 className="text-center text-lg font-mono text-gray-900">{"Description"}</h4>
                    <span>X</span>
                  </div>

                  <div
                    className={`w-full flex flex-col justify-end py-3 border-t-[1px] border-t-gray`}
                  >
                    <p>
                      <strong>{` Service Level Agreements`} </strong>
                      {`, abbreviated{" "}
                        <strong> SLAs </strong>, help you to meet specific response times for your
                        customers' requests. This way you can define goals such as answering every
                        inquiry within eight hours. If you are at risk of missing this target,
                        Zammad will alert you.`}
                    </p>
                    <p>
                      {` You can define targets for three different metrics:{" "}
                        <strong> response time </strong> (time between the creation of a ticket and
                        the first reaction of an agent), <strong> update time </strong> (time
                        between a customer's request and an agent's reaction), and{" "}
                        <strong> solution time </strong> (time between creating and closing a
                        ticket).`}
                    </p>
                    <p>
                      {`  Any escalated tickets (i.e. tickets that have missed the defined target) are
                        displayed in a separate view in your overviews. You can also configure{" "}
                        <strong> email notifications </strong>.`}
                    </p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalDescription
