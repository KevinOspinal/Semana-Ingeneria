import React from 'react'

export default function Buttons({color, fontSize, title, type}) {
  return (
    <button className="btn btn-primary button text-black border-black" type={type} style={{ background: color, fontSize: fontSize}}>
        {title}
    </button>
  )
}
