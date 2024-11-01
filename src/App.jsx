import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {


  const[watches,setWatches]=useState([])
  useEffect(()=>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
  // const watches=[
  //   {id:1,name:'appale',price:200},
  //   {id:2,name:'samsung',price:200},
  //   {id:3,name:'mi',price:200}
  // ]
// const watches=
//   [
//     {
//         "id": 1,
//         "name": "Rolex Submariner",
//         "price": 8500
//     },
//     {
//         "id": 2,
//         "name": "Omega Speedmaster",
//         "price": 5500
//     },
//     {
//         "id": 3,
//         "name": "TAG Heuer Carrera",
//         "price": 4000
//     },
//     {
//         "id": 4,
//         "name": "Seiko 5 Automatic",
//         "price": 150
//     },
//     {
//         "id": 5,
//         "name": "Apple Watch Series 8",
//         "price": 399
//     }
// ]
  

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch} ></Watch>)
      }
      
    </>
  )
}

export default App
