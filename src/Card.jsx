
import './App.css'
function Card({name,email}){
    return(
        <>
           <div className="card">
            <h1>{name}</h1>
            <p>{email}</p>
           </div>
        </>
    )
}

export default Card;

// PascalCase -> pascal case  
// camelCase  -> camel case