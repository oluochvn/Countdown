import { useState } from "react"
import { Sunrise } from "lucide-react"
import { MoonStar } from "lucide-react"
import { Timer } from "lucide-react"


function App() {
  const [dark,setDark] = useState(true)

  return (
    <div className={`${dark ? "bg-black": "bg-[beige]"} ${dark ? "text-white": "text-black"} min-h-screen transition duration-900 ease-in-out`}>
      <nav className="flex justify-around pt-6 items-center">
        <div className="flex gap-2 items-center">
           <Timer className="hover:text-red-500 transition duration-500 ease-in-out"/>
            <h1>Countdown</h1>
           
        </div>
        <button className="" onClick={()=> setDark(!dark)}>
          <Sunrise className={`absolute ${dark ? "opacity-100": "opacity-0 transition duration-900 ease-out"}`}/>
          <MoonStar className={`absolute ${dark ? "opacity-0": "opacity-100 transition duration-900 ease-out"}`}/>
        </button>
        
      </nav>
    </div>
  )
}

export default App
