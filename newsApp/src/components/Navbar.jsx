import { useState } from "react"

export function Navbar({setCategory}){
    const [search,setSearch] = useState("")
    
    function clickHandler(e){
        setCategory(e.target.dataset.name)
    }


    function handler(){
        setCategory(search)
    }


    return(
        <div className="flex py-3 font-semibold text-gray-400 space-x-3 justify-around">
            <div>
                <h1 className="text-[35px] cursor-pointer text-sky-500" onClick={()=>setCategory("punjab")}>NEWS 360°</h1>
            </div>
            <div className="flex space-x-6 text-[17px] items-center cursor-pointer">
                <div className="group relative hover:transition-all hover:text-blue-300">
                <h1 onClick={clickHandler} data-name="Sports">Sports</h1>
                <div className="h-1 w-full bg-blue-300 hidden group-hover:block"></div>
                </div>
                <div className="group relative hover:transition-all hover:text-blue-300">
                <h1 onClick={clickHandler} data-name="science">Science</h1>
                <div className="h-1 w-full bg-blue-300 hidden group-hover:block"></div>
                </div>
                <div className="group relative hover:transition-all hover:text-blue-300">
                <h1 onClick={clickHandler} data-name="technology">Technology</h1>
                <div className="h-1 w-full bg-blue-300 hidden group-hover:block"></div>
                </div>
                <div className="group relative hover:transition-all hover:text-blue-300">
                <h1 onClick={clickHandler} data-name="entertainment">Entertainment</h1>
                <div className="h-1 w-full bg-blue-300 hidden group-hover:block"></div>
                </div>
                <div className="group relative hover:transition-all hover:text-blue-300">
                <h1 onClick={clickHandler} data-name="health">Health</h1>
                <div className="h-1 w-full bg-blue-300 hidden group-hover:block"></div>
                </div>

            </div>
            <div className="flex items-center">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="py-1 pr-6 pl-2 text-black rounded-sm border-2" />
                <button className="bg-sky-400 rounded-sm text-white py-1 ml-2 px-2 " onClick={handler}>Search</button>
            </div>
        </div>
    )
}