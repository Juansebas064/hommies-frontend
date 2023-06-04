import { buttonNext, buttonPrevious } from "../../../utils/svgs.jsx"

export default function EventsFilters({ activeFilter, setActiveFilter }) {

  function handleSetFilter(event) {
    if (event.target.name === activeFilter) {
      setActiveFilter('todos')
    } else {
      setActiveFilter(event.target.name)
    }
  }

  return (
    <>
      {/* Contenedor de filtros de los eventos */}
      <div className="relative w-full h-[36px] lg:w-full mt-3 text-[16px] z-10 outline outline-[13px] outline-gray-100">

        {/* Contenedor scrollable de botones de filtros */}
        <div className="flex justify-center sm:justify-evenly lg:justify-center  h-full" id="filter-container">

          {/* Botones de filtros */}
          <button
            className={`z-10 rounded-full px-[10px] mr-2 ${activeFilter === 'sin_empezar' ? 'bg-indigo-500 text-white' : 'bg-gray-200 border-0'}`}
            name="sin_empezar"
            onClick={(event) => handleSetFilter(event)}>
            Sin empezar
          </button>
          <button
            className={`z-10 rounded-full px-[10px] mr-2 ${activeFilter === 'en_progreso' ? 'bg-indigo-500 text-white' : 'bg-gray-200 border-0'}`}
            name="en_progreso"
            onClick={(event) => handleSetFilter(event)}>
            En progreso
          </button>
          <button
            className={`z-10 rounded-full px-[10px] mr-2 ${activeFilter === 'terminado' ? 'bg-indigo-500 text-white' : 'bg-gray-200 border-0'}`}
            name="terminado"
            onClick={(event) => handleSetFilter(event)}>
            Terminado
          </button>
        </div>
      </div>
    </>
  )
}