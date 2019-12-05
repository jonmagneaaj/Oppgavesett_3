import React from 'react'

const Oppmuntring = (props) => {
return (
    <div class="oppmuntring">
        <h1>Kom igjen {props.name}</h1>
        <p>{props.emne} er ikke så vanskelig som du tror.</p>
        <p>Du må bare huske å gjøre som Simon sier: </p>
        <blockquote>Fjern all kode i Scrimba, og skriv det gang på gang fra scratch"</blockquote>
    </div>
  )
}

export default Oppmuntring