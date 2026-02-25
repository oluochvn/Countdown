import { useState, useEffect} from "react"
import { Sunrise } from "lucide-react"
import { MoonStar } from "lucide-react"
import { Timer } from "lucide-react"


function App() {
  const [dark,setDark] = useState(true)
  const [time,setTime] = useState<number>(5000);
  const [red ,setRed] = useState(false) 
  

  useEffect(() => {
    const targetDate = new Date("2026-02-26T06:30:00").getTime()

    const updateTime = () => {
      const now = new Date().getTime()
      const diff = targetDate - now
      setTime(diff > 0 ? diff : 0)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])


const getFormattedTime = (time : number) => {
  let totalSeconds = Math.floor(time / 1000)

  let days = Math.floor(totalSeconds / (24 * 60 * 60))
  let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
  let minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  let seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}
  const { days, hours, minutes, seconds } = getFormattedTime(time)

    useEffect(()=>{
    (days < 5) ? setRed(true) : setRed(false)
  },[days])


  return (
    <div className={`${dark ? "bg-black": "bg-[beige]"} ${dark ? "text-amber-600": "text-amber-600"} min-h-screen transition duration-900 ease-in-out`}>
      <nav className="flex justify-around pt-6 items-center">
        <div className="flex gap-2 items-center">
           <Timer className="hover:text-red-900 transition duration-500 ease-in-out"/>
            <h1>Countdown</h1>
           
        </div>
        <button className="" onClick={()=> setDark(!dark)}>
          <Sunrise className={`absolute ${dark ? "opacity-100": "opacity-0 transition duration-900 ease-out"}`}/>
          <MoonStar className={`absolute ${dark ? "opacity-0": "opacity-100 transition duration-900 ease-out"}`}/>
        </button>
        
      </nav>
      <div className={`min-h-[90vh] items-center ${red ? "text-lime-300": "text-amber-600" } flex justify-center text-6xl font-light font-[Roboto] `}>
         {days}D: {hours}H : {minutes}M : {seconds}S
      </div>
    </div>
  )
}

export default App
