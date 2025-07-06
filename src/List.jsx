
import React from 'react'

export default function List() {
    let students = ['Vidhi', "Rashmi", "vishal"]
    return (
        <>
            <h1>Students list</h1>
            <ol type='a'>
                {students.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ol>
        </>
    )
}
