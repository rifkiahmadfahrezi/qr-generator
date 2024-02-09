import { ChangeEventHandler } from "react"

interface InputProps{
   placeholder?: string,
   name?: string,
   onChangeHandler: ChangeEventHandler<HTMLInputElement>,
   className?: string
   value: string
}


function Input({placeholder, name, onChangeHandler, className, value} : InputProps) {
  return (
    <input 
      type="text" 
      placeholder={placeholder}
      name={name}
      autoFocus={true}
      onChange={onChangeHandler} 
      className={`py-4 px-6 rounded-3xl bg-white/10 text-md  text-white ${className}`}
      required
      value={value}
      />
  )
}

export default Input