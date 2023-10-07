import React from 'react'

export default function Buttons({color, fontSize, title}) {
  return (
    <button className="btn btn-primary button text-black border-black" style={{ background: color, fontSize: fontSize}}>
        {title}
    </button>
  )
}
