import LoginForm from "./LoginForm";


// Hero({ authorized}: {authorized: boolean}):JSX.Element
export default function LoginContainer({}): JSX.Element {

  return(
    <div className="flex items-center justify-center min-h-screen bg-cyanLight">
      <LoginForm />
    </div>
  );
}