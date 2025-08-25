import React from 'react';

export default function Hero()  {
  return (
    <section className="flex flex-col items-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Text Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700 mb-6 tracking-tight">
          A Little Journey About Benton
        </h1>
        <div className="space-y-4 text-gray-600">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illo id, ex rerum quaerat aspernatur temporibus incidunt earum esse a! Fugit expedita sunt iure dignissimos?
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora enim error, quam laudantium neque magni voluptatem suscipit dolor sint iure ducimus, eos sed ab nobis.
          </p>
        </div>
      </div>

      {/* Images and Stats Section */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col gap-4">
          <div className="bg-blue-200 text-violet-950 rounded-2xl p-6 flex flex-col justify-between h-48 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold">10X</h2>
            <p className="text-sm sm:text-base">We help businesses profit 10x more than before</p>
          </div>
          <div className="h-64 bg-cover bg-center rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url("https://images.wallpapersden.com/image/download/monkey-luffy-4k-one-piece-2024-art_bmdubGaUmZqaraWkpJRobWllrWdma2U.jpg")` }}></div>
        </div>

        {/* Card 2 */}
        <div className="h-full bg-cover bg-center rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url("https://images.wallpapersden.com/image/download/monkey-luffy-4k-one-piece-2024-art_bmdubGaUmZqaraWkpJRobWllrWdma2U.jpg")` }}></div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4">
          <div className="h-64 bg-cover bg-center rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url("https://images.wallpapersden.com/image/download/monkey-luffy-4k-one-piece-2024-art_bmdubGaUmZqaraWkpJRobWllrWdma2U.jpg")` }}></div>
          <div className="bg-pink-200 text-violet-950 rounded-2xl p-6 flex flex-col justify-between h-48 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold">1.5M+</h2>
            <p className="text-sm sm:text-base">We empower 1.5 million+ users worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};
