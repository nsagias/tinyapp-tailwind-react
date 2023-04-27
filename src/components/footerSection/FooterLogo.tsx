import { Link } from "react-router-dom";

export default function FooterLogo({}): JSX.Element {
  return (
    <>
     <Link 
        to={"/"}> 
        <img src="/images/logo-tiny-app.svg" 
        alt="" 
        className="w-32 border-8 border-cyan px-4 py-1 pt-2 rounded-full bg-white hover:opacity-70"
        />
      </Link>
    </>
  )
}