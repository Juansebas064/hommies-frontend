import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserDataContext } from './Profile/UserDataProvider';
import ErrorLogin from './VentanaModal';

const Login = () => {

  // Función para consultar info del usuario en la bd cuando se haga login
  const { userData, getUserDataFromDB } = useContext(UserDataContext)

  //Obtencíon de datos con react hook form
  const { register, formState: { errors }, handleSubmit } = useForm();

  // Redirección con base en si tiene o no el perfil completo
  useEffect(() => {
    if (userData) {
      (!userData.genero || !userData.fecha_nacimiento || !userData.ciudad) ? window.location.href = "/profile/preferences" : window.location.href = "/dashboard"
    }
  }, [userData])

  // Login con Google
  const handleLoginSuccess = async (response) => {

    console.log(response);
    //devuelve el JWT 
    await axios.post('http://localhost:5000/api/login/verify/google', {

      data: response
    }).then((response) => {

      console.log(response.data);

      if (response.data.token != null) {

        localStorage.setItem('token', response.data.token);
        console.log("la respuesta entro y es: " + response.data.token);
        getUserDataFromDB()
      }
      else {
        console.log("la respuesta no entro y es: " + response.data);
        window.location.href = '/register';
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  // Verificar login con nickname y contraseña
  const onSubmit = async (data) => {
    try {

      // Petición para buscar el usuario en la bd y generar el token JWT
      const response = await axios.post('http://localhost:5000/api/create/JWT', data);

      // Si se generó el token:
      if (response.data.token) {

        localStorage.setItem('token', response.data.token); // Token a localStorage
        getUserDataFromDB() // Obtención de los datos del usuario
      }
      // Si no se generó el token
      else {
        console.log("la respuesta es: " + response.data.token);
        console.log("tienes algo mal en la contraseña, o usuario O no estas registrado");
        cambiarEstadoErrorLogin(true);
      }
    } catch (error) {
      // Aquí puedes manejar los errores que ocurran durante la solicitud
      console.error(error);
    }
  }


  const [estadoErrorLogin, cambiarEstadoErrorLogin] = useState(false);

  return (
    // Contenedor principal
    <div className="flex flex-col justify-center items-center py-5 lg:min-h-[89vh]" >

      {/* Contenedor del formulario (card) */}

      <div className="px-10 pt-10 pb-0 bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-[80%] mx-5 max-w-[500px] overflow-hidden" >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <h1 className="font-bold text-3xl text-gray-900 text-center mb-7" >
            Hommies
          </h1>

          {/* Div nickname */}
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-sm font-semibold px-1">
                Nickname
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
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="alejogonzales05"
                  {...register('nickname', {
                    required: true
                  })}
                />
              </div>
              {errors.nickname?.type === 'required' && <p>Campo nickname es requerido *</p>}
            </div>
          </div>

          {/* Div contraseña */}
          <div className="flex flex-col -mx-3">
            <div className="w-full px-3 mb-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold px-1">
                  Contraseña
                </label>
                <a
                  href="/recoverpassword"
                  className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 text-right"
                >
                  Recuperar contraseña
                </a>
              </div>

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
                      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="************"
                  {...register('password', {
                    required: true
                  })}
                />
              </div>
              {errors.password?.type === 'required' && <p>Campo contraseña es requerido *</p>}
            </div>
          </div>

          {/* Botones */}
          <div className="w-full px-3 mb-5">
            <button
              type="submit"
              className="block w-full max-w-xs mx-auto mt-5 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              Continuar
            </button>

            <ErrorLogin
              estado={estadoErrorLogin}
              cambiarEstado={cambiarEstadoErrorLogin}>
              <h1 className="text-center text-xl font-semibold mt-9 mb-3">¡Error al intentar iniciar sesión!</h1>
              <p className='text-center mb-5'>Por favor verifíca que la información de tu nickname y/o contraseña estén bien.</p>
            </ErrorLogin>

            <div className="text-center mt-4 ">
              - O continua con -
            </div>

            {/* Botón de Google */}
            <button className="rounded-full flex items-center justify-center border-1 border-gray-200 hover:bg-gray-200 w-13 max-w-xs mx-auto mt-4 text-black px-1 font-normal">

              <GoogleOAuthProvider clientId="650698705793-eetbgpi48lld1tb4eol6n8g355raapeg.apps.googleusercontent.com">
                <GoogleLogin
                  type='icon'
                  shape='circle'
                  size='large'
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
            </button>
          </div>
        </form>
      </div>


      {/* No tienes cuenta??? */}
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden mt-8 px-4 py-3">
        <p className="font-bold text-semibold text-gray-900">
          ¿No tienes cuenta?
          <a
            href="/register"
            className="text-semibold font-bold text-indigo-500 hover:text-indigo-700"
          > Crea una
          </a>
        </p>
      </div>

    </div>


  )
};

export default Login;