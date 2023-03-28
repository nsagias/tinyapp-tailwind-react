export default function NavButtonsAuthentication({ authorized }: { authorized : boolean}) {
  return (
    <>
      {!authorized ? 
        (
          <>
            <a href="#" className="hover:text-darkerViolet">Login</a>
            <a href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">Sign Up</a>
          </>      
        ) : (
          <a href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">Logout</a>
        )
      }
    </>
  );
}