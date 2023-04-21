import LoginForm from "./LoginForm";

export default function LoginContainer({}): JSX.Element {

  return(
    <div className="flex items-center justify-center min-h-screen bg-cyanLight">
      <LoginForm />
    </div>
  );
}