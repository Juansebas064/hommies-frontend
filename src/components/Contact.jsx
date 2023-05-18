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
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/mKISDAA.jpg" alt="photoRivera"/>
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
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/aBdEf4P.jpg" alt="photoArango"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Juan Felipe Arango</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/JuanArango30'> 
                                <img class='w-9 rounded-full transition ease-in-out delay-150 hover:bg-slate-200/60 hover:duration-200' src={GithubLogo} alt="GithubLogo"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/5NucAT6.jpg" alt="photoCasallas"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Daniel Felipe Casallas</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/casariz'> 
                                <img class='w-9 rounded-full transition ease-in-out delay-150 hover:bg-slate-200/60 hover:duration-200' src={GithubLogo} alt="GithubLogo"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/96YLKxL.jpg" alt="photoGuerrero"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Carlos Eduardo Guerrero</p>
                            <p class="text-base text-gray-400 font-normal">Ingeniero de Sistemas</p>
                        </div>
                        <div class='text-center'>
                            <a href='https://github.com/ClusterMax'> 
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