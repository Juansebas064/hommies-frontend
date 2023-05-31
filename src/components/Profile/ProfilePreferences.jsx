import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePreferences = () => {
  const [backMessage, setBackMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ProfilePreferencesMessage")
      .then((response) => {
        setBackMessage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div class="min-w-screen min-h-screen bg-gray-100/50 flex items-center justify-center px-10 py-5">
        <div class="bg-gray-100 text-gray-500 rounded-2xl shadow-xl w-full overflow-hidden">
          <div class="md:flex w-full">
            <div className="w-full rounded-2xl border-2 border-indigo-400">
              <p className="text-indigo-600 text-center font-extrabold text-4xl mt-8">
                Escoge tus preferencias
              </p>

              <div className="flex w-full items-center justify-center mt-6">
                <div
                  class="grid w-[500px] grid-cols-3 space-x-2 rounded-xl bg-gray-200 p-2"
                  
                >
                  <div>
                    <input
                      type="radio"
                      name="option"
                      id="1"
                      class="peer hidden"
                      
                    />
                    <label
                      for="1"
                      class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      Hombre
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="option"
                      id="2"
                      class="peer hidden"
                    />
                    <label
                      for="2"
                      class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      Mujer
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="option"
                      id="3"
                      class="peer hidden"
                    />
                    <label
                      for="3"
                      class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      Prefiero no decirlo
                    </label>
                  </div>
                </div>
              </div>


              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreferences;
