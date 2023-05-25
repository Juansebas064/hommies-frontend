export default function Activities() {
  return (
    <div className="w-[95%] lg:basis-1/3 border-solid bg-white border-gray-800 rounded-xl shadow-xl lg:m-5 lg:ml-1 mx-auto flex-shrink flex flex-col">
      <div className="flex w-full">
        <button className="flex-grow py-1">
          Eventos
        </button>
        <button className="flex-grow py-1 bg-gray-200">
          Lugares
        </button>
      </div>
    </div>
  )
}