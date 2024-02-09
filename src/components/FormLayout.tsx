import { FormEventHandler, ReactNode } from "react"


interface Props{
   children: ReactNode;
   submitHandler: FormEventHandler<HTMLFormElement>
}

function FormLayout({children, submitHandler} : Props) {
  return (
      <form onSubmit={submitHandler}>   
         {children}
      </form>
  )
}

export default FormLayout