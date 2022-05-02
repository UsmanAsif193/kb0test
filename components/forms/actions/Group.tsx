export const Group = () => {
  return (
    <div className={`mx-2`}>
      <select
        className="form-control block  w-full px-3 py-1.5  text-gray-700 bg-white h-[51px]
        transition ease-in-out  focus:text-gray-700 focus:bg-white  outline-white  border-b-[1px] border-b-red-gray-100 focus:border-b-[3px] focus:border-b-red-500"
      >
        <option>{`Users`}</option>
      </select>
    </div>
  )
}
