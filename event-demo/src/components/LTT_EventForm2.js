import React from 'react'

export default function TVC_EventForm2() {

    // Dinh nghia cac ham xu ly su kien
    const eventHandleClick1 = (content)=>{
        console.log('====================================');
        console.log(content);
        console.log('====================================');
    }
  return (
    <div className='alert alert-success'>
      <h2>Event Demo - Function Component</h2>
        <button onClick={eventHandleClick1("Le Tuan Tinh")}>Gọi khi render</button>
        <button onClick={()=>eventHandleClick1("K22CNT1-ReactJs")}>Gọi khi click </button>
    </div>
  )
}