import {Fragment, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import ContactPage from './components/ContactPage'

function App() {
  let a=localStorage.getItem("mal")
  let [tru,setTru]=useState(false)
  let [values,setVal]=useState([JSON.parse(a)])
  let nameValue=useRef()
  let lastnameValue=useRef()
  let mailValue=useRef()

  async function submited(event){
    
    event.preventDefault()
    setVal((prev)=>{
      return [...prev,{
        name:nameValue.current.value,
        lastname:lastnameValue.current.value,
        mail:mailValue.current.value,
        id:uuidv4()
      }]
    })
    localStorage.setItem("mal",JSON.stringify(values))
    console.log(values);
    setTru(true)  
    console.log(localStorage.getItem("mal"));
  }
  
  return (
    <Fragment>
     <div className="container flex items-center justify-evenly">
     <form id="forma" className='mt-[50px] flex flex-col items-center justify-evenly gap-10'>
        <input ref={nameValue} type="text" placeholder='Name' className='namein pl-[20px] rounded-lg w-[500px] h-[50px]' />
        <input ref={lastnameValue} type="text" placeholder='Lastname' className='namein pl-[20px] rounded-lg w-[500px] h-[50px]' />
        <div className=' w-full flex justify-around items-center'>
          <label htmlFor="mail">Erkak</label>
          <input ref={mailValue}  type="checkbox" id='mail'/>
          <label htmlFor="femail">Ayol</label>
          <input ref={mailValue} type="checkbox" id='femail'/>
        </div>
        <button onClick={submited} type='subbit' className='shadow-md border w-[100px] h-[40px]  bg-orange-400 rounded-2xl'>Submit</button>
      </form>
      
     </div>
     <span className=' inline-block w-full h-0 mb-7 mt-7 border-2 border-black'></span>
     <div className="container">
     {tru ? <ContactPage keys={values}/>:  <ContactPage keys={values}/>}
     </div>
    </Fragment>
  )
}


export default App
