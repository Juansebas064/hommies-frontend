import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-auto w-full bg-slate-100 px-6 py-3">
      <div className="flex flex-col items-center text-center justify-between">
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-96 rounded-md px-6 bg-gradient-to-t from-indigo-600 to-indigo-300"
        >
          <motion.p whileHover={{scale: [null, 1.5, 1.2]}} transition={{duration: 0.3}} className="text-8xl font-extrabold text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] pt-10">
            Hommies
          </motion.p>
          <p className="text-2xl font-semibold text-indigo-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pt-5">
            Red social de eventos
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-96 rounded-md px-6 bg-gradient-to-t from-indigo-300 to-indigo-200"
        >
          <p className="text-2xl font-semibold text-indigo-950 mt-8">
          ¡Bienvenido a Hommies, la red social de eventos más emocionante! Aquí encontrarás un espacio vibrante y conectado, donde podrás descubrir y compartir experiencias únicas. Desde conciertos hasta festivales, pasando por conferencias inspiradoras y encuentros culturales, Hommies te mantendrá actualizado sobre los eventos más destacados. Conéctate con personas apasionadas como tú, crea tu perfil personalizado y recibe recomendaciones personalizadas. ¡Prepárate para vivir momentos inolvidables y construir recuerdos duraderos con Hommies!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
