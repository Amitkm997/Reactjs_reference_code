

import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    console.log(data)
     useEffect(()=>{
         fetch(url).then((res)=>res.json()).then((data)=>setData(data))
         .then((err)=>console.log(err))
         setLoading(false)
     },[url])
     return {data,loading}
}
