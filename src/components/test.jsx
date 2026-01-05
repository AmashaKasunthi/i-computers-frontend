import { useState } from "react";

export default function Test(){
  const [count,setCount]= useState(10)
  const [isVisible, setIsVisible] = useState(true)

    return(
    <div className="w-full h-full bg-amber-500 flex justify-center items-center" >
      <button onClick={
				()=>{
					setIsVisible(!isVisible)	
				}
				// if else
			} className="w-12.5 h-12.5 bg-red-600 text-white">{isVisible?"X":"O"}</button>

      {isVisible && <div className="w-100 h-100 bg-white flex justify-center items-center flex-col" >
        <h1 className="text-[55px]">{count}</h1>
        <div className="w-full h-12.5  flex justify-center items-center gap-2 ">
          <button onClick={
            ()=>{
              setCount(count -1)
            }
          } className="w-25 h-11.25 bg-red-600 text-white">
            Decrement
          </button>
          <button onClick={
            ()=>{
              setCount(count +1)
            }
          }className="w-25 h-11.25 bg-green-600 text-white">
            increment
          </button>
        </div>
      </div>}
    </div>
    )
}