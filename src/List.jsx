
import React from 'react'

export default function List() {
    let students = ['Vidhi', "Rashmi", "vishal"]
    return (
        <>
            <h1>Students list</h1>
            <ul>
                {
                    students.map((cur,index)=><li key={index}>{cur}</li>)
                }
            </ul>
        </>
    )
}
