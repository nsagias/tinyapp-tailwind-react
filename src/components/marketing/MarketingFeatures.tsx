export default function MarketingFeatures() {
  return (
    <section id="marketing-features" className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
      {/* Horizontal Line */}
      <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
      
      {/* Vertical Line */}
      <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

      {/* Marketing Box 1 */}
      <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">

        {/* Image Wrapper/Position */}
        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">

          {/* Image Container */}
          <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-darkerViolet">
            <img src="images/icon-brand-recognition.svg" alt="" className="" />
          </div>
        </div>

        <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">Brand Recognition</h5>
        <p className="text-center text-gray-400 md:text-left"></p>
        </div>
      </div>
    </section>
  );
}