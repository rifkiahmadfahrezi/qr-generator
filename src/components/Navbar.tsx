import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="fixed w-full top-[10px]">
      <div className="container mx-auto px-4 bg-white/10 rounded-xl">
         <div className="flex justify-between items-center min-h-[50px]">
            <Link to={'/'} className="text-slate-100 uppercase font-semibold tracking-wide">qyuar</Link>
         </div>
      </div>
    </header>
  )
}

export default Navbar