export default function LoginCard({}): JSX.Element {
  return (
    <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
      {/* Left Side Of Login Card */}
        <div className="p-6 md:p-20">
          <h2 className="mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm mb-12 font-sans font-bold text-grayViolet">Login to your account.</p>
        </div>
      {/* Right Side Of Login Card */}
      <img src="images/water-bubles.jpg" alt="" className="w-[430px] hidden md:block" />
    </div>
  );
}