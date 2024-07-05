import classNames from "classnames"
import { getTheme, removeToken, setTheme } from "../../storage/storage"
import { ThemeProvider } from "../../context/theme"
import { useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { adminOptions } from "../../utils/Constants"
import ThemeButton from "../common/ThemeButton"

const AdminHome = () => {
  
  const location = useLocation()
  const navigate = useNavigate()

  const theme = getTheme()
  const [themeMode, setThemeMode] = useState<string>(theme)
  const changeTheme = ()=>{
    if(themeMode === "dark"){
      setThemeMode("light")
      setTheme("light")
    }
    else{
      setThemeMode("dark")
      setTheme("dark")
    }
  }

  const handleLogout = ()=>{
      removeToken()
      navigate("/login")
  }

  return (
    <ThemeProvider value={{themeMode, changeTheme}}>
        <div className={classNames(
          "h-lvh w-lvw p-2 flex flex-col duration-300 ease-in-out font-serif",
          {
              "bg-dark-bg": themeMode === 'dark',
              "bg-light-bg": themeMode === 'light'
          }
        )}>
            <div className={classNames(
              "h-14 flex items-center justify-between rounded-full text-white pl-5 pr-5 m-2 duration-300 ease-in-out",
              {
                  "bg-dark-selected-bg text-dark-text": themeMode === 'dark',
                  "bg-light-selected-bg text-light-text": themeMode === 'light'
              }
            )}>
                <div className={classNames(
                  " text-3xl italic font-serif",
                  {
                    "text-dark-text": themeMode === 'dark',
                    "text-light-text": themeMode === 'light',
                  }
                )}>
                    Name
                </div>
                <div className="flex items-center">
                  <ThemeButton/>
                </div>
            </div>


            <div className="flex justify-center h-full">
              <div className={classNames(
                " basis-1/6 rounded-3xl duration-300 ease-in-out pl-2 pr-2 flex flex-col items-center justify-between",
                {
                  "bg-dark-selected-bg": themeMode === 'dark',
                  "bg-light-selected-bg": themeMode === 'light',
                }
              )}>
                
                <div className="w-full">
                  {
                    adminOptions.map((button,index)=>{
                      return(
                        <button 
                          key={index}
                          className={classNames(
                            "flex rounded-[16px] h-12 items-center w-full text-lg italic pl-2 pr-2 mt-3 mb-3 hover:scale-110 duration-300 ease-in-out",
                            {
                              "bg-dark-primary text-dark-text": themeMode === 'dark' && location.pathname === button.route,
                              "text-dark-text hover:bg-dark-primary": themeMode === 'dark' && location.pathname !== button.route,
                              "bg-light-primary text-light-text": themeMode === 'light' && location.pathname === button.route,
                              "text-light-text hover:bg-light-primary": themeMode === 'light' && location.pathname !== button.route,
                            }
                          )}
                          onClick={()=>navigate(button.route)}
                        >
                          <div className="mr-2">
                            {button.svg}
                          </div>
                          <div>
                            {button.name}
                          </div>
                        </button>
                      )
                    })
                  }
                </div>

                <button 
                  className={classNames(
                    "rounded-2xl w-full mb-3 h-12 flex items-center pl-2 pr-2 hover:scale-110 duration-300 ease-in-out text-lg italic justify-between",
                    {
                      "bg-dark-primary text-dark-text": themeMode === 'dark',
                      "bg-light-primary text-light-text": themeMode === 'light'
                    }
                  )}
                  onClick={handleLogout}
                >
                  <p>
                    Logout
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </button>
                
              </div>

              <div className=" basis-5/6" >
                  <Outlet/>
              </div>
            </div>

        </div>
    </ThemeProvider>
  )
}

export default AdminHome
