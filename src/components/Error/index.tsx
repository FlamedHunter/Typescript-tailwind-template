import { useNavigate } from "react-router-dom"
import ErrorImage from "../../assets/images/ErrorImage.png"

const ErrorPage = () => {

    const navigate = useNavigate()
    const handleHomeButton = ()=>{
        console.log("working")
        navigate("/")
    }

    return (
        <>
            <div className="flex items-center justify-center object-contain flex-wrap gap-2 h-lvh">
                <img 
                    src={ErrorImage} 
                    alt="404 error" 
                    className=" object-contain h-[50lvh] basis-1"
                />
                <div className="flex flex-col basis-1 w-full flex-grow items-center">
                    <button 
                        className=" text-hoverColor bg-white p-3 text-base shadow-md rounded-xl border-2 border-warmGray-200"
                        onClick={()=>handleHomeButton()}
                    >
                        Back to HomePage
                    </button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
