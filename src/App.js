import { useState } from 'react'
import { ChromePicker } from 'react-color'
import { calcAPCA } from 'apca-w3'

export default function App() {
  const [hex, setHex] = useState('#ff79c6')
  const [textColor, setTextColor] = useState('black')
  const [whiteContrast, setWhiteContrast] = useState(51.4)
  const [blackContrast, setBlackContrast] = useState(57.5)

  const handleColorChange = (color) => {
    // Calculate towards WHITE
    const LcWhite = parseFloat(
      Math.abs(calcAPCA('white', color.hex)).toFixed(1),
    )

    // Calculate towards BLACK
    const LcBlack = parseFloat(calcAPCA('black', color.hex).toFixed(1))

    setHex(color.hex)
    setTextColor(LcWhite >= LcBlack ? 'white' : 'black')
    setWhiteContrast(LcWhite)
    setBlackContrast(LcBlack)
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
      <h1 className='text-2xl font-mono' style={{ color: textColor }}>
        Text needs to be <span className='font-bold'>{textColor}</span>
      </h1>
      <div className='text-xl font-mono' style={{ color: textColor }}>
        <div>White contrast: {whiteContrast}</div>
        <div>Black contrast: {blackContrast}</div>
      </div>
    </div>
  )
}
