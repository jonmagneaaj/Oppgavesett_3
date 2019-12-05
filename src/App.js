import React from 'react'
import './App.css'
import Oppmuntring from './components/Oppmuntring'
import Birds from './components/Birds'
import Gud from './components/Gud'
import Snurrings from './components/Snurrings'



const App = () => {
  const Doves = ["seagull", "hummingbird", "blackbird", "parakeet"]
  const Fugler = ["seagull", "hummingbird", "blackbird", "parakeet"]
  const guder = [
  {navn: "Balder", besk: "Ås, gud for lys, skjønnhet, kjærlighet og lykke"},
  {navn: "Brage", besk: "Ås, gud for diktning, veltalenhet og skaldekunst"},
  {navn: "Eir", besk: "Gudinne for legekunsten, en av Menglads Frøyas?) ni møyer"},
  {navn: "Frøya", besk: "Vane, fruktbarhetsgudinne"}
] 
  return (

  <main className='App'>
    <h3>Oppgave 1</h3>
    <h1>I dag skal vi jobbe med React. Jeg trenger litt oppmuntring</h1>
    <Oppmuntring name='Jon-Magne' emne='Kunsten i å synge rent'/>

    <h3>Oppgave 3</h3>
    {
      Doves.map( Dove => <li>{Dove}</li> )
    }

    <h3>Oppgave 4</h3>
    {
      Fugler.map( Fugl => <Birds Fugl = {Fugl}/> )
    }

    <h3>Oppgave 5</h3>
    <h2>Norrøne guder</h2>
    {
      guder.map( gud=> <Gud gud = {gud} />)
    }

    <h3>Oppgave 5 -nøtt</h3>
    <section id="oppgave5">
      <Snurrings antall="3" />
      <Snurrings antall="1" />
      <Snurrings antall="5" />
    </section>
    
  </main>
)
}

export default App;
