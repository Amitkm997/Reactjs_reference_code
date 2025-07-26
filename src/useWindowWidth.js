import { useState,useEffect } from "react";

function useWindowWidth(){
    const[width,setWidth]=useState(window.innerWidth);
    
    useEffect(()=>{
       const handleSize=()=>setWidth(window.innerWidth);
       window.addEventListener("resize",handleSize)

       return ()=>{
        window.removeEventListener("resize",handleSize)
       };
    },[])

    return width

}

export default useWindowWidth;