import React from 'react'
import GithubLogo from '../assets/github-mark.svg'


const Contact = () => {
    return (
        <>

            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div class="text-center pb-12">
                    <h2 class="text-base font-bold text-indigo-600">
                        Tenemos el mejor equipo de trabajo
                    </h2>
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Echa un vistazo a nuestros miembros del equipo
                    </h1>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://avatars.githubusercontent.com/u/61480324?v=4" alt="photoRuiz"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Juan Sebastián Ruiz</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/Juansebas064'> 
                                <img class='w-9 rounded-full transition ease-in-out delay-150 hover:bg-slate-200/60 hover:duration-200' src={GithubLogo} alt="GithubLogo"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://scontent.cdninstagram.com/v/t51.2885-15/45364185_333020220820864_3975515841322828100_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=BiMz-J0e0Z8AX8EmuAL&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTkxMzMxMDI4MDQ3MDE1MzcyMQ%3D%3D.2-ccb7-5&oh=00_AfAl2ece09xjXvmb1MVXD0M-UJEEWMKyIMprJJw6hiI8XQ&oe=64677D32&_nc_sid=978cb9" alt="photoRivera Need to specify how to reconcile divergent br Need to specify how to reconcile divergent br Need to specify how to reconcile divergent br"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Miguel Ángel Rivera</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/BitzKort'> 
                                <img class='w-9 rounded-full transition ease-in-out delay-150 hover:bg-slate-200/60 hover:duration-200' src={GithubLogo} alt="GithubLogo"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://avatars.githubusercontent.com/u/61480324?v=4" alt="photo"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Juan Sebastián Ruiz</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/Juansebas064'> 
                                <img class='w-9 rounded-full transition ease-in-out delay-150 hover:bg-slate-200/60 hover:duration-200' src={GithubLogo} alt="GithubLogo"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://avatars.githubusercontent.com/u/61480324?v=4" alt="photo"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Juan Sebastián Ruiz</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/Juansebas064'> 
                                <img class='w-9 rounded-full transition ease-in-out delay-150 hover:bg-slate-200/60 hover:duration-200' src={GithubLogo} alt="GithubLogo"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://avatars.githubusercontent.com/u/61480324?v=4" alt="photo"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Juan Sebastián Ruiz</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/Juansebas064'> 
                                <img class='w-9 rounded-full transition ease-in-out delay-150 hover:bg-slate-200/60 hover:duration-200' src={GithubLogo} alt="GithubLogo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact