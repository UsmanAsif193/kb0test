export const State = () => {
  return (
    <div className={`flex flex-row`}>
      <select
        className="form-control block  w-full px-3 py-1.5  mr-2 text-gray-700 bg-white h-[51px]
          transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`is`}</option>
        <option>{`is not`}</option>
      </select>
      <select
        className="form-control block  w-full px-3 py-1.5  mr-2 text-gray-700 bg-white h-[51px]
          transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`Closed`}</option>
        <option>{`Merged`}</option>
        <option>{`new`}</option>
        <option>{`Open`}</option>
        <option>{`pending close`}</option>
        <option>{`pending reminder`}</option>
      </select>
    </div>
  )
}
