import { useState } from 'react'
import { ChromePicker } from 'react-color'
import { calcAPCA } from 'apca-w3'

const IconTarget = ({ fill }) => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path
      d='M3 12.5356C3 13.7336 3.20468 14.8653 3.61404 15.9309C4.02942 16.9964 4.58927 17.9415 5.29361 18.7663C6.00397 19.591 6.7986 20.2472 7.67752 20.7348C7.96648 20.8973 8.23738 20.9575 8.49021 20.9154C8.74907 20.8793 8.96278 20.7769 9.13134 20.6084C9.30592 20.4398 9.42331 20.2381 9.48351 20.0034C9.54371 19.7686 9.52565 19.5338 9.42933 19.299C9.33903 19.0642 9.15241 18.8626 8.86947 18.694C8.18922 18.3087 7.58722 17.8061 7.06348 17.186C6.53974 16.5599 6.12738 15.8526 5.82638 15.064C5.5314 14.2693 5.38391 13.4266 5.38391 12.5356C5.38391 11.5423 5.56752 10.6152 5.93474 9.75439C6.30195 8.88751 6.81365 8.12599 7.46983 7.46981C8.12601 6.81364 8.88452 6.30194 9.74538 5.93473C10.6123 5.56149 11.5423 5.37487 12.5356 5.37487C13.5289 5.37487 14.459 5.56149 15.3259 5.93473C16.1928 6.30194 16.9513 6.81364 17.6014 7.46981C18.2576 8.12599 18.7723 8.88751 19.1456 9.75439C19.5188 10.6152 19.7054 11.5423 19.7054 12.5356C19.7054 12.8968 19.8258 13.1888 20.0666 13.4115C20.3134 13.6342 20.5964 13.7456 20.9154 13.7456C21.2225 13.7456 21.4934 13.6342 21.7281 13.4115C21.9629 13.1888 22.0803 12.8968 22.0803 12.5356C22.0803 11.2293 21.8305 10.0012 21.3308 8.85139C20.8312 7.70158 20.1419 6.68722 19.263 5.80831C18.3901 4.92939 17.3757 4.24312 16.2199 3.74948C15.07 3.24983 13.842 3 12.5356 3C11.2293 3 9.99822 3.24983 8.84238 3.74948C7.69257 4.24312 6.6782 4.92939 5.79929 5.80831C4.92639 6.68722 4.24011 7.70158 3.74046 8.85139C3.24682 10.0012 3 11.2293 3 12.5356ZM7.09057 12.5356C7.09057 13.1858 7.19291 13.7968 7.39759 14.3687C7.60829 14.9406 7.8822 15.4493 8.21932 15.8947C8.56245 16.3342 8.92967 16.6803 9.32097 16.9332C9.62197 17.1258 9.90792 17.189 10.1788 17.1228C10.4497 17.0506 10.6634 16.9061 10.8199 16.6894C10.9825 16.4666 11.0547 16.2198 11.0367 15.9489C11.0246 15.678 10.8862 15.4372 10.6213 15.2265C10.1999 14.9255 9.86277 14.5402 9.60993 14.0707C9.35709 13.6011 9.23067 13.0894 9.23067 12.5356C9.23067 12.0721 9.31495 11.6416 9.48351 11.2443C9.65207 10.841 9.88685 10.4888 10.1878 10.1878C10.4949 9.8808 10.847 9.64302 11.2444 9.47446C11.6477 9.29988 12.0781 9.21259 12.5356 9.21259C12.9992 9.21259 13.4266 9.29988 13.8179 9.47446C14.2152 9.64302 14.5614 9.87478 14.8563 10.1698C15.1573 10.4647 15.3951 10.8079 15.5697 11.1992C15.7443 11.5845 15.8406 11.9938 15.8587 12.4272C15.8767 12.7583 15.9911 13.0172 16.2018 13.2038C16.4185 13.3844 16.6653 13.4747 16.9423 13.4747C17.2192 13.4747 17.463 13.3784 17.6737 13.1858C17.8904 12.9871 17.9988 12.7282 17.9988 12.4092C17.9988 11.6868 17.8573 11.0065 17.5744 10.3684C17.2914 9.72429 16.8971 9.15841 16.3914 8.67079C15.8918 8.17716 15.3108 7.78887 14.6486 7.50593C13.9925 7.21698 13.2881 7.0725 12.5356 7.0725C11.7892 7.0725 11.0848 7.21698 10.4226 7.50593C9.76645 7.78887 9.18853 8.18017 8.68887 8.67982C8.18922 9.17948 7.79792 9.76041 7.51498 10.4226C7.23204 11.0788 7.09057 11.7831 7.09057 12.5356ZM12.2015 20.184C12.1955 20.4187 12.2948 20.5692 12.4995 20.6354C12.7042 20.7077 12.8818 20.6625 13.0323 20.5L14.1701 19.308L15.5155 22.6401C15.5697 22.7725 15.654 22.8719 15.7684 22.9381C15.8827 23.0103 16.0182 23.0193 16.1747 22.9652L17.0777 22.622C17.2342 22.5618 17.3215 22.4625 17.3396 22.324C17.3637 22.1856 17.3516 22.0652 17.3035 21.9628L15.8587 18.6398L17.5563 18.6308C17.7851 18.6368 17.9416 18.5495 18.0259 18.3689C18.1101 18.1823 18.071 18.0047 17.9085 17.8362L13.0774 12.9329C12.9209 12.7824 12.7524 12.7433 12.5718 12.8155C12.3972 12.8818 12.3099 13.0232 12.3099 13.2399L12.2015 20.184Z'
      fill={fill}
    />
  </svg>
)

const TextLink = ({ href, children }) => (
  <a
    href={href}
    className='underline underline-offset-2 decoration-blue-500 hover:decoration-2 font-semibold flex flex-row items-center gap-1'
    target='_blank'
    rel='noreferrer'
  >
    {children} ↗
  </a>
)

export default function App() {
  const [hex, setHex] = useState('#298de2')
  const [textColor, setTextColor] = useState('white')
  const [whiteContrast, setWhiteContrast] = useState(67.5)
  const [blackContrast, setBlackContrast] = useState(42)

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
      className='p-4 lg:p-24 xl:p-80 h-screen w-screen grid auto-cols-auto auto-rows-auto justify-items-center content-center gap-4'
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
      <div className='p-8 container mx-auto md:w-auto md:px-32  bg-white/80 rounded-3xl border border-gray-300 shadow-2xl flex flex-col gap-8 items-center '>
        <button
          style={{
            background: hex,
            color: textColor,
          }}
          className='container md:w-72 p-4 rounded-xl shadow-md font-bold flex justify-center gap-2 border border-gray-300'
        >
          <IconTarget fill={textColor} />
          Auto tint button
        </button>
        <div className='flex flex-row justify-center gap-1'>
          Contrast is calulated via{' '}
          <TextLink href='https://www.myndex.com/APCA/'>
            APCA algorithm
          </TextLink>
        </div>
        <div className='flex flex-row justify-center gap-1'>
          View on{' '}
          <TextLink href='https://github.com/digitallymarked/apca-calculator'>
            <svg height='20' width='20' viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
            </svg>
            GitHub
          </TextLink>
        </div>
      </div>
    </div>
  )
}
