import { useState,useEffect} from 'react'

export default function ProgressBar({Time,onTimeOut}){

  const [RemainingTime,setRemainingTime]=useState(Time)

 

  useEffect(() => {                                                 // use effect for prevent from creation of multiple  settimeout function
     let timer=setTimeout(onTimeOut, Time);
     return ()=>{
      clearTimeout(timer);
     }
  }, [Time, onTimeOut]);

  useEffect(()=>{                                                                          //use effect  to prevent infinite loop
   let interval= setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return ()=>{
       clearInterval(interval)
    }

  },[])

  

  return <progress max={Time} value={RemainingTime} id='progressBar'></progress>;
}


