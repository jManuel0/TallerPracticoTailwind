export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-6">

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">

        {/* ================= CARD 1 ================= */}
        <div className="bg-black text-white w-72 h-80 p-6 rounded-xl flex flex-col justify-between">

          {/* Parte superior */}
          <div className="flex justify-between items-center">
            <h2 className="order-1 font-bold">Liam O'Connor</h2>
            <span className="order-2">⭐ 5.0</span>
          </div>

          {/* Parte central */}
          <div className="flex flex-col justify-center items-center flex-1">
            <p className="text-center">Visual Artist</p>
          </div>

          {/* Parte inferior */}
          <div className="flex justify-between items-center">
            <span>$99</span>
            <span>12 Month</span>
          </div>

        </div>

        {/* ================= CARD 2 ================= */}
        <div className="bg-white w-72 h-80 p-6 rounded-xl flex flex-col justify-between">

          {/* Parte superior */}
          <div className="flex justify-between items-center">
            <h2 className="order-2 font-bold">Alex Turner</h2>
            <span className="order-1">⭐ 5.0</span>
          </div>

          {/* Parte central */}
          <div className="flex flex-col justify-center items-center flex-1">
            <p className="text-center">Creative Director</p>
          </div>

          {/* Parte inferior */}
          <div className="flex justify-between items-center">
            <span>$150</span>
            <span>24 Month</span>
          </div>

        </div>

      </div>
    </div>
  );
}
