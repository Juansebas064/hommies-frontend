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
      <div class="min-w-screen min-h-screen bg-gray-100/50 flex items-center justify-center px-40 py-5">
        <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
          <div class="md:flex w-full">
            <div className="w-full rounded-3xl border-2 border-indigo-400">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreferences;
