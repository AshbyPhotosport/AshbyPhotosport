export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('_COL1205.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white text-8xl font-serif tracking-tight animate-fadeIn">
          ASHBY PHOTOSPORT
        </h1>
        <p className="text-gray-400 text-5xl mt-6 animate-fadeIn delay-200">
          Bay Area • Motorsport Photography
        </p>
        <h3 className="text-white-100 text-5xl mt-10 font-serif tracking-tight animate-fadeIn"> 
          COMING SOON
          </h3>
      </div>
    </main>
  )
}