import { useState } from 'react'
import { ChromePicker } from 'react-color'
import { APCAcontrast, sRGBtoY } from 'apca-w3'
import { colorParsley } from 'colorparsley' // optional string parsing

export default function App() {
  const [hex, setHex] = useState('#ff79c6')
  const [textColor, setTextColor] = useState('black')
  const [whiteContrast, setWhiteContrast] = useState(51.4)
  const [blackContrast, setBlackContrast] = useState(57.5)

  const whiteAPCA = sRGBtoY(colorParsley('white'))
  const blackAPCA = sRGBtoY(colorParsley('black'))

  const handleColorChange = (color) => {
    setHex(color.hex)
    const cl = sRGBtoY(colorParsley(color.hex))

    const LcWhite = Number(Math.abs(APCAcontrast(whiteAPCA, cl)).toFixed(2))
    const LcBlack = Number(APCAcontrast(blackAPCA, cl).toFixed(2))
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
      <h1 className='text-2xl' style={{ color: textColor }}>
        Text needs to be <span className='font-bold'>{textColor}</span>
      </h1>
      <div style={{ color: textColor }}>
        <div>White contrast: {whiteContrast}</div>
        <div>Black contrast: {blackContrast}</div>
      </div>
    </div>
  )
}
