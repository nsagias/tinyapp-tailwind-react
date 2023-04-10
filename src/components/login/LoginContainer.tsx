import LoginForm from "./LoginForm";


// Hero({ authorized}: {authorized: boolean}):JSX.Element
export default function Login({}): JSX.Element {

  return(
    <div className="flex items-center justify-center min-h-screen bg-rose-200">
      <LoginForm />
    </div>
  );
}