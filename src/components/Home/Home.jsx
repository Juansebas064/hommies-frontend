import React from "react";
import { motion } from "framer-motion";
import HommiesLogo from "../../assets/HOMMIES.png";
import HommiesAni from "../../assets/HOMMIESindi200.mp4";

const Home = () => {
  return (
    <div className="h-auto w-full bg-slate-100 px-6 py-3 ">
      <div className="flex flex-row items-center text-center space-y-5">
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="h-auto rounded-md px-6 bg-indigo-200 items-center text-center object-center flex w-full"
        >
          <div className="w-2/3">
            <motion.p
              whileHover={{ scale: [null, 1.1] }}
              transition={{ duration: 0.1 }}
              className="sm:text-8xl text-3xl font-extrabold text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] pt-10 px-4"
            >
              Hommies
            </motion.p>
            <p className="sm:text-2xl text-base font-semibold text-indigo-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pt-5">
              Red social de eventos
            </p>
            <div className="flex w-full justify-center ">
              <video src={HommiesAni} className="w-1/2" autoPlay />
            </div>
          </div>
          <div className="w-1/3 rounded-md px-6 my-10 bg-lime-50 ">
            <p className="sm:text-lg text-xs font-semibold text-gray-900 mt-10 text-left">
              ¡Bienvenido a Hommies, la red social de eventos más emocionante!
              Aquí encontrarás un espacio vibrante y conectado, donde podrás
              descubrir y compartir experiencias únicas. Desde conciertos hasta
              festivales, pasando por conferencias inspiradoras y encuentros
              culturales, Hommies te mantendrá actualizado sobre los eventos más
              destacados. Conéctate con personas apasionadas como tú, crea tu
              perfil personalizado y recibe recomendaciones personalizadas.
            </p>
            <p className="sm:text-2xl text-xs font-semibold text-gray-900 mt-8 text-left">
              No te has unido aún? Crea una cuenta.
            </p>
            <a className="mx-8 w-1/3 flex items-center justify-center" href="/register">
              <div className="bg-indigo-400 px-10 rounded-full h-10 flex items-center text-center sm:text-base text-xs justify-center hover:h-12 hover:duration-100">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="my-2 mr-4 w-6 h-6 sm:w-4 sm:h-4"
              >
                <title>Registrate</title>
                <path d="M10.7754 17.3477H5.8065a.2815.2815 0 1 0 0 .563h4.9689a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9688a.2815.2815 0 1 0 0 .563h4.9688a.2815.2815 0 0 0 0-.563zm-7.3336-6.475H5.8065a.2815.2815 0 1 0 0 .563h4.9548a.2815.2815 0 1 0 0-.563zm7.3195 0h-4.9547a.2815.2815 0 1 0 0 .563h4.9547a.2815.2815 0 0 0 0-.563zm.5518-9.2001h-4.341a2.4042 2.4042 0 0 0-4.5804 0H5.3674c-1.7103 0-3.0968 1.3864-3.0968 3.0967v16.134C2.2706 22.6135 3.6571 24 5.3674 24h13.2652c1.7103 0 3.0968-1.3865 3.0968-3.0967V4.7693c0-1.7103-1.3865-3.0967-3.0968-3.0967zm-8.7046.563a.2815.2815 0 0 0 .2815-.2224 1.8411 1.8411 0 0 1 3.5979 0 .2815.2815 0 0 0 .2815.2224h1.5146v1.844a.8446.8446 0 0 1-.8446.8446H9.2552a.8446.8446 0 0 1-.8446-.8446v-1.844Zm11.2383 18.6677c0 1.3993-1.1344 2.5337-2.5337 2.5337H5.3674c-1.3993 0-2.5337-1.1344-2.5337-2.5337V4.7693c0-1.3993 1.1344-2.5337 2.5337-2.5337h2.4802v1.844c0 .7774.6302 1.4076 1.4076 1.4076h5.4896c.7774 0 1.4076-.6302 1.4076-1.4076v-1.844h2.4802c1.3993 0 2.5337 1.1344 2.5337 2.5337z" />
              </svg>  
                Registrate
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
