export const Type = () => {
  return (
    <div className={`flex flex-row justify-start items-center`}>
      <select
        className="form-control block  w-[100px] px-3 py-1.5  mr-2 text-gray-700 bg-white h-[51px]
        transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`is`}</option>
        <option>{`is not`}</option>
      </select>
      <div className="flex flex-col max-h-32 p-3 w-40 h-32 text-gray-700 bg-white  border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500 overflow-y-scroll ">
        <span className="focus:bg-lightgrey hover:bg-lightgrey active:bg-lightgrey">{`1 Low`}</span>
        <span>{`Incident`}</span>
        <span>{`Problem`}</span>
        <span>{`Request For Changes`}</span>
      </div>
    </div>
  )
}
