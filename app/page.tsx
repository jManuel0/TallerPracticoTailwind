export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-10">

      <div className="flex flex-col md:flex-row gap-10">

        {/* CARD OSCURA */}
        <div className="bg-black text-white w-80 rounded-3xl p-6 flex flex-col">

          {/* Imagen simulada */}
          <div className="h-32 bg-gray-700 rounded-xl mb-4 flex justify-center items-center">
            Imagen
          </div>

          {/* Nombre */}
          <div className="mb-4">
            <h2 className="font-bold text-lg">Liam O'Connor</h2>
            <p className="text-gray-400">Visual Artist</p>
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center mb-6">
            <span>⭐ 5.0</span>
            <span>$99</span>
            <span>12 Meses</span>
          </div>

          {/* Botón */}
          <div className="flex justify-center mt-auto">
            <button className="bg-blue-500 px-6 py-2 rounded-xl">
              Get In Touch
            </button>
          </div>

        </div>

        {/* CARD CLARA */}
        <div className="bg-white w-80 rounded-3xl p-6 flex flex-col shadow-md">

          <div className="h-32 bg-gray-300 rounded-xl mb-4 flex justify-center items-center">
            Imagen
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Alex Turner</h2>
            <p className="text-gray-500">Creative Director</p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span>⭐ 5.0</span>
            <span>$150</span>
            <span>24 Meses</span>
          </div>

          <div className="flex justify-center mt-auto">
            <button className="border px-6 py-2 rounded-xl">
              Get In Touch
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
