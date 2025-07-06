import { useEffect } from "react";


let arr=[2,3,4,5,6];

let newArray=arr.map((n,index)=>n*index)

console.log(newArray) //[0,3,8,15,24]

//syntax of useEffect
// 1. we don't specified dependency array
useEffect(()=>{

})

// 1. we specified empty dependency array
useEffect(()=>{

},[])