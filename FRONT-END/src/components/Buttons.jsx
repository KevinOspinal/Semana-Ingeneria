import React from 'react'

<<<<<<< HEAD
export default function Buttons({color, fontSize, title, type}) {
  return (
    <button className="btn btn-primary button text-black border-black" type={type} style={{ background: color, fontSize: fontSize}}>
=======
export default function Buttons({color, fontSize, title, onClick}) {
  return (
    <button className="btn btn-primary button text-black border-black" style={{ background: color, fontSize: fontSize}} onClick={onClick}>
>>>>>>> KevinAcevedo
        {title}
    </button>
  )
}
