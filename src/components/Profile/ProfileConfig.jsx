import React, {useState} from "react";

const ProfileConfig = () => {

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   // Aquí puedes realizar las acciones que desees sin recargar la página
  //   console.log('Botón clicado');
  // };

  const [intereses, setIntereses] = useState([
    {
      tematica: 'Ejercicio',
      marcado: false
    },
    {
      tematica: 'Programación',
      marcado: false
    },
    {
      tematica: 'Videojuegos',
      marcado: false
    },
    {
      tematica: 'Bailar',
      marcado: false
    },
    {
      tematica: 'Caminar',
      marcado: false
    },
    {
      tematica: 'BMX',
      marcado: false
    },
    {
      tematica: 'Skateboarding',
      marcado: false
    },
    {
      tematica: 'Anime',
      marcado: false
    },
    {
      tematica: 'Política',
      marcado: false
    },
    {
      tematica: 'Nadar',
      marcado: false
    },
    {
      tematica: 'Arte',
      marcado: false
    },
    {
      tematica: 'Música',
      marcado: false
    },
    {
      tematica: 'Manualidades',
      marcado: false
    }
  ])
  // 'Bailar', 'Cantar', 'Deportes', 'Meditación', 'Diseño gráfico', 'Skateboarding', 'Tocarla', 'Ambientalismo'

  function handleEditarIntereses (index) {
    const nuevosIntereses = intereses.slice();
    nuevosIntereses[index].marcado = !nuevosIntereses[index].marcado;
    setIntereses(nuevosIntereses);
    console.log('Clicked: ', nuevosIntereses);
  }

  return (
    <div className="container mx-auto px-0 py-28">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="px-16 pt-10 pb-4 bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-[80%]  max-w-[600px] overflow-hidden">
          <h3 className="font-bold text-3xl text-gray-900 text-center mb-7">Configuración del perfil</h3>
          
          <form>              
              <div className="w-full px-3 mb-5">
                  <label className="text-sm font-semibold px-1">
                    Nombre
                  </label>

                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="w-full px-3 mb-5">
                  <label className="text-sm font-semibold px-1">
                    Apellido
                  </label>

                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <input
                      // value={userInfo.lastName}
                      // onChange={handleNameChange}
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="w-full px-3 mb-5">
                    <label className="text-sm font-semibold px-1">
                      Genero
                    </label>
                  
                    <select
                      id="gender"
                      name="gender"
                      // value={userInfo.gender}
                      // onChange={handleNameChange}
                      className="w-full pl-3 pr-3 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:border-indigo-500 block"
                      >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                </div>
                <div className="w-full px-28 mb-3">
                  <label className="font-semibold text-sm px-1">Cambia tus intereses</label>
                </div>
                
                <div className="grid grid-cols-4 gap-4 border-4 border-gray-400 py-5 rounded-md">

                  <div className='w-[30vw] my-10 mx-auto flex justify-center flex-wrap'>
                    {intereses.map((elemento, index) => (
                    <button
                      
                      key={index}
                      name={elemento.tematica}
                      className={`rounded-full px-2 py-1 my-1 mx-1 ${elemento.marcado ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                      onClick={() => handleEditarIntereses(index)}>
                      {elemento.tematica}
                    </button>
                    ))}
                  </div>   
                </div>

                <button type="submit" className="block w-full max-w-xs mx-auto mt-7 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                  Continuar
                </button>
              {/*             
              <input
                type="text"
                id="firstName"
                name="firstName"
                
                className="border border-gray-300 px-4 py-2 rounded-md w-64"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleNameChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-64"
              /> */}
              
              {/* <select
                id="interests"
                name="interests"
                multiple
                value={userInfo.interests}
                onChange={handleInterestsChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-64"
              >
                <option value="Programming">Programming</option>
                <option value="Reading">Reading</option>
                <option value="Sports">Sports</option>
                <option value="Travel">Travel</option>
              </select> */}
              
          </form>
        </div>

        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h3 className="font-bold text-3xl text-gray-900">Historial de actividades</h3>
                <p className="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileConfig;
