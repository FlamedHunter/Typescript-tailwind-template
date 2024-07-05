const Loader = () => {
  return (
    <>
        
        <div className=" absolute left-0 right-0 top-0 bottom-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex w-64 animate-pulse gap-2 p-4 z-10">
                <div className="h-12 w-12 rounded-full bg-white"></div>
                <div className="flex-1">
                    <div className="mb-1 h-5 w-3/5 rounded-lg bg-white text-lg"></div>
                    <div className="h-5 w-[90%] rounded-lg bg-white text-sm"></div>
                </div>
                <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-white"></div>
            </div> 
        </div>
    </>
  )
}

export default Loader
