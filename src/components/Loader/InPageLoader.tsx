import classNames from "classnames"
import useTheme from "../../context/theme"

const InPageLoader = () => {
    const {themeMode} = useTheme()
    return (
      <>
          <div className=" h-full w-full bottom-0 z-10 flex items-center justify-center bg-transparent">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className={classNames(
                "w-16 h-16 border-4 text-blue-400 text-4xl animate-spin  flex items-center justify-center  rounded-full text-hoverColor",
                {
                    "border-light-bg border-t-dark-primary": themeMode === 'dark',
                    "border-dark-bg border-t-light-primary": themeMode === 'light'
                }
              )}>
              </div>
            </div> 
          </div>
      </>
    )
  }
  
  export default InPageLoader
  