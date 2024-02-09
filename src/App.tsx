import React, { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import FormLayout from "./components/FormLayout"
// import Loader from "./components/Loader"
import { Link } from "react-router-dom"
import { saveAs } from 'file-saver'

export default function App() {

  const [text, setText] = useState<string>("")
  const [qrText, setQRText] = useState<string>("")

  function submitHandler(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setQRText(`https://api.qrserver.com/v1/create-qr-code/?data=${text}`)
  }

  function downloadQR(url : string){
    saveAs(url, 'myqr.jpg')
  }

  function onChangeHandler(e : React.ChangeEvent<HTMLInputElement>){
    const { value } = e.target
    setText(value)
  }

  function reset(){
    setQRText('')
    setText('')
  }


  return (
    <>
      <main data-testid="main" className="container mx-auto px-4 flex flex-col items-center mt-[100px] min-h-dvh ">
        <div className="w-full md:max-w-[700px]">
          <div className="text-white text-center  mb-6">
            <h1 className="font-semibold text-3xl">QYÜAR</h1>
            <p className="text-stone-500">Free and easiest way to create a QR code, no login required</p>
          </div>
          <FormLayout submitHandler={submitHandler}>
            <label htmlFor="text-input" className="mb-2 text-sm font-medium sr-only text-white">insert text or link here</label>
            <div className="relative">
                <Input 
                  value={text}
                  onChangeHandler={onChangeHandler}
                  placeholder="Insert your text or link here.."
                  className="block transition pr-[150px] duration-200 w-full border-gray-600 placeholder-gray-400 text-white focus:outline-emerald-500 focus:ring-emerald-500 focus:border-emerald-500"/>
                <Button
                  className="absolute right-[10px] top-2/4 translate-y-[-50%] capitalize"
                  text="generate QR"/>
            </div>
          </FormLayout>

            {qrText !== '' && 
              <section className="mt-6">
                  <div className="flex justify-center mt-5">
                    <div className="relative">


                      <figure className="relative">
                        <img 
                          height={300}
                          width={300}
                          src={qrText} 
                          alt="" 
                          onLoad={e => (e.target as Element).classList.remove('animate-pulse')}
                          className="bg-slate-500 animate-pulse"/>

                        <img 
                          className="absolute w-[200px] top-0 left-[-190px]"
                          src="/arrow.svg" alt="" />

                      </figure>
                      <div className="gap-3 flex justify-center mt-10">
                        <a 
                          className="text-white py-3 px-4 bg-emerald-600 rounded-3xl  cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault() 
                            downloadQR(qrText)
                          }}
                          href={qrText}
                          >Download my QR</a>

                      <Button 
                        onClickHandler={reset}
                        className="bg-red-500 hover:bg-red-600"
                        text="reset"/>
                      </div>
                    </div>
                  </div>
              </section>
            }
          

        </div>
      </main>

    <footer className="text-stone-600 py-5 text-center group max-w-fit mx-auto">
      <span className="transition duration-100 delay-100 group-hover:text-stone-200">&copy; {new Date().getFullYear()} created by </span>
      <Link 
        className="underline group-hover:text-white" 
        target="_blank" 
        to="https://github.com/rifkiahmadfahrezi">Rifki ahmad fahrezi</Link>
    </footer>
    </>
  )
}
