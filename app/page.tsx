export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-8">

      <div className="flex flex-col md:flex-row gap-12">

        {/* ================= CARD OSCURA ================= */}
        <div className="bg-black text-white w-80 rounded-3xl overflow-hidden flex flex-col">

          {/* Imagen superior */}
          <div className="relative h-36">
            <img
              src="/bg1.jpg"
              alt="background"
              className="w-full h-full object-cover"
            />

            {/* Avatar */}
            <div className="absolute -bottom-6 left-6">
              <img
                src="/avatar1.jpg"
                alt="avatar"
                className="w-14 h-14 rounded-full border-4 border-black"
              />
            </div>

          </div>

          {/* Contenido */}
          <div className="p-6 flex flex-col flex-1">

            {/* Nombre */}
            <div className="mt-6 mb-4">
              <h2 className="font-bold text-lg">Liam O'Connor</h2>
              <p className="text-gray-400 text-sm">Visual Artist</p>
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center mb-6">
              <span>⭐ 5.0</span>
              <span>$99</span>
              <span>12 Meses</span>
            </div>

            {/* Botón */}
            <div className="flex justify-center mt-auto">
              <button className="bg-blue-500 px-6 py-2 rounded-xl w-full">
                Get In Touch
              </button>
            </div>

          </div>
        </div>

        {/* ================= CARD CLARA ================= */}
        <div className="bg-white w-80 rounded-3xl overflow-hidden flex flex-col shadow-lg">

          <div className="relative h-36">
            <img
              src="/bg2.jpg"
              alt="background"
              className="w-full h-full object-cover"
            />

            <div className="absolute -bottom-6 left-6">
              <img
                src="/avatar2.jpg"
                alt="avatar"
                className="w-14 h-14 rounded-full border-4 border-white"
              />
            </div>

          </div>

          <div className="p-6 flex flex-col flex-1">

            <div className="mt-6 mb-4">
              <h2 className="font-bold text-lg">Alex Turner</h2>
              <p className="text-gray-500 text-sm">Creative Director</p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span>⭐ 5.0</span>
              <span>$150</span>
              <span>24 Meses</span>
            </div>

            <div className="flex justify-center mt-auto">
              <button className="border px-6 py-2 rounded-xl w-full">
                Get In Touch
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
