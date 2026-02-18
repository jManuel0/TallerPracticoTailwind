export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-8">
      
      <div className="flex flex-col md:flex-row gap-12">

        {/* Dark Card */}
        <div className="bg-black text-white w-80 rounded-3xl overflow-hidden flex flex-col">

          {/* Top Image */}
          <div className="relative h-36">
            <img
              src="/imagen1.jpeg"
              alt="background"
              className="w-full h-full object-cover"
            />

            {/* Avatar */}
            <div className="absolute -bottom-6 left-6">
              <img
                src="/imagen2.jpeg"
                alt="avatar"
                className="w-14 h-14 rounded-full border-4 border-black object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">

            <div className="mt-6 mb-4">
              <h2 className="font-bold text-lg">Liam O'Connor</h2>
              <p className="text-gray-300 text-sm">Visual Artist</p>
            </div>

            <div className="flex justify-between items-center mb-6 text-white">
              <span>⭐ 5.0</span>
              <span>$99</span>
              <span>12 Months</span>
            </div>

            <div className="flex justify-center mt-auto">
              <button className="bg-blue-600 px-6 py-2 rounded-xl w-full">
                Get In Touch
              </button>
            </div>

          </div>
        </div>

        {/* Light Card */}
        <div className="bg-white w-80 rounded-3xl overflow-hidden flex flex-col shadow-lg">

          <div className="relative h-36">
            <img
              src="/imagen3.jpeg"
              alt="background"
              className="w-full h-full object-cover"
            />

            <div className="absolute -bottom-6 left-6">
              <img
                src="/imagen4.jpeg"
                alt="avatar"
                className="w-14 h-14 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1 text-gray-900">

            <div className="mt-6 mb-4">
              <h2 className="font-bold text-lg text-gray-900">Alex Turner</h2>
              <p className="text-gray-700 text-sm">Creative Director</p>
            </div>

            <div className="flex justify-between items-center mb-6 text-gray-800">
              <span>⭐ 5.0</span>
              <span>$150</span>
              <span>24 Months</span>
            </div>

            <div className="flex justify-center mt-auto">
              <button className="border border-gray-400 px-6 py-2 rounded-xl w-full text-gray-900">
                Get In Touch
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
