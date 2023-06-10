import {close} from "../utils/svgs";

const ModalErrorLogin = ({children, estado, cambiarEstado}) => {
    
    return (
        <>  
            {estado &&
                <div className="fixed z-20 bg-[rgba(0,0,0,0.2)] h-full w-full left-0 top-0 overflow-auto flex justify-center items-center">
                    <div className="z-30 bg-white rounded-[14px] relative min-w-[250px] max-w-[350px] sm:max-w-[600px] max-h-[50vh] sm:max-h-[60vh] px-3 sm:px-7 flex-grow overflow-auto">
                        <span onClick={() => cambiarEstado(false)}
                            className="text-base font-bold absolute top-2 right-2 rounded-3xl cursor-pointer hover:scale-[0.8] hover:transition-all duration-500 p-1 hover:bg-red-500">
                            {close(22)}
                        </span>
                        {children}
                    </div>
                </div> 
            }
        </>
       
    )

}

export default ModalErrorLogin;