import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isloading, setIsloading] = useState<boolean>(false)

    const handleLogin = async ()=>{
        // setIsloading(true)
        // const result = await LoginHelper(userName, password)

        // if(!result.success){
        //     setIsloading(false)
        //     return
        // }

        // const userObj: user = result.data
        // setToken(userObj.token)
        // setIsloading(false)
        // navigate('/admin')
    }

  return (
    <>   
        <div className=" flex h-lvh w-lvw bg-dark-bg">

            <div className="flex flex-col basis-1/2 items-center justify-center">
                <div className="mb-6 text-dark-text text-center">
                    <p className="text-4xl italic mb-4">
                        Welcome
                    </p>
                    <p className=" text-2xl italic">
                        Login to Continue
                    </p>
                </div>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className={`mb-6 w-[480px] h-[54px] px-4 rounded-2xl bg-dark-selected-bg text-dark-text`}
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={`mb-6 w-[480px] h-[54px] px-4 rounded-2xl bg-dark-selected-bg text-dark-text`}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button 
                    className="w-64 h-12 rounded-full bg-dark-primary text-dark-text italic text-lg duration-300 ease-in-out hover:scale-105"
                    onClick={handleLogin}
                    disabled={isloading}
                >
                    {
                        isloading ?
                        "Loading...":
                        "Login"
                    }
                </button>
            </div>

            <div className="basis-1/2 flex items-center justify-center text-5xl text-dark-text italic">
                Logo
            </div>
        </div>
    </>
  )
}

export default Login
