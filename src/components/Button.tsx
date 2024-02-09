import { MouseEventHandler } from "react"

interface ButtonProps {
  text: string,
  className?: string,
  onClickHandler?: MouseEventHandler<HTMLButtonElement>
}


function Button({text, className, onClickHandler} : ButtonProps) {
  return (
    <button 
      className={`text-white font-medium rounded-3xl text-sm px-4 py-3 bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-800 ${className}`}
      onClick={onClickHandler}>{text}</button>
  )
}

export default Button