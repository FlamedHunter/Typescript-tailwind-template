const FullScreenLoader = () => {
    return (
      <>
          <div className=" h-lvh w-lvw bottom-0 z-10 flex items-center justify-center bg-transparent">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
                <div className="w-16 h-16 border-4 text-blue-400 text-4xl animate-spin border-white flex items-center justify-center border-t-hoverColor rounded-full text-hoverColor">
                </div>
            </div> 
          </div>
      </>
    )
  }
  
  export default FullScreenLoader
  