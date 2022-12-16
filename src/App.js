import { useState } from 'react'
import { ChromePicker } from 'react-color'

export default function App() {
  const [hex, setHex] = useState('#ff79c6')
  const [textColor, setTextColor] = useState('white')

  const handleColorChange = (color) => {
    setHex(color.hex)
  }

  return (
    <div
      className=' h-screen w-screen grid auto-cols-auto auto-rows-auto justify-items-center content-center gap-4'
      style={{
        background: hex,
      }}
    >
      <ChromePicker
        color={hex}
        disableAlpha={true}
        onChange={handleColorChange}
        className='picker'
      />
      <h1 className='text-2xl' style={{ color: textColor }}>
        Text is {textColor}
      </h1>
    </div>
  )
}
