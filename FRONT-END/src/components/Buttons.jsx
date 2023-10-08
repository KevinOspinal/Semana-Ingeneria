import React from 'react'

export default function Buttons({color, fontSize, title, onClick}) {
  return (
    <button className="btn btn-primary button text-black border-black" style={{ background: color, fontSize: fontSize}} onClick={onClick}>
        {title}
    </button>
  )
}
