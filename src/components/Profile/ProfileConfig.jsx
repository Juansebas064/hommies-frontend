import React, {useState} from "react";

const ProfileConfig = () => {

  const handleClick = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las acciones que desees sin recargar la página
    console.log('Botón clicado');
  };
  
  
  const [userInfo, setUserInfo] = useState({
    
  });

  const [profileImage, setProfileImage] = useState('');

  const handleNameChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleInterestsChange = (e) => {
    const selectedInterests = Array.from(e.target.selectedOptions, (option) => option.value);
    setUserInfo({
      ...userInfo,
      interests: selectedInterests,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const renderActivityHistory = () => {
    return userInfo.activityHistory.map((activity) => (
      <li key={activity.id}>{activity.activity}</li>
    ));
  };

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
                      value={userInfo.lastName}
                      onChange={handleNameChange}
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
                      value={userInfo.gender}
                      onChange={handleNameChange}
                      className="w-full pl-3 pr-3 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:border-indigo-500 block"
                      >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                </div>
                <div className="w-full px-32 mb-3">
                  <label className="font-semibold text-sm px-1">Cambia tus intereses</label>
                </div>
                
                <div className="p-2 grid grid-cols-4 gap-4 border-4 border-gray-400 py-5 rounded-md">

                  
                    <button onClick={handleClick} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" >Anime</button>
                  
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Rock</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Bailar</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Fiesta</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Beber</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Ejercicio</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Caminar</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Juegos</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Tecnologia</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Minimalismo</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Charlar</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Frio</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Calor</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Satanismo</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Cristianismo</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Ateismo</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Gerontofilia</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Coprofilia</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Anales</label>
                  </div>
                  <div className='flex flex-col justify-between bg-gray-300 '>
                    <input type="checkbox" id="cb4" value="cb4"
                      className='appearance-none h-1 w-full bg-gray-400 checked:bg-yellow-300 checked:shadow-[0_0px_5px_yellow] transition-all duration-300 peer'/>
                    <label  className='p-1 flex flex-row justify-center px-2 peer-checked:text-yellow-300 select-none text-white'>Orales</label>
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
