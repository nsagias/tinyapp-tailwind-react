export default function HeroContentContainer({ chidlren }: any): JSX.Element {
  return (
    <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w1/2 xl:mb-52">
      <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">Your short links host</h1>
      <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">Build your brand and get detailed insights on how your links are ranking.</p>
      <a href="# " className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">here</a>
    </div>
  );
}