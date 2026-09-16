export default function Home() {
  return (
    <div 
    className="relative h-screen w-screen bg-cover bg-center" 
    style={{ backgroundImage: "url('/_COL1205.jpg')" }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white text-6xl font-serif tracking-tight animate-fadeIn">
          ASHBY PHOTOSPORT
        </h1>
        <p className="text-gray-300 text-xl mt-4 animate-fadeIn delay-200">
          Bay Area • Motorsport Photography
        </p>
      </div>
    </div>
  )
}