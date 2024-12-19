export default function Page() {
  return (
    <div className="grid grid-rows-[100px_1fr_100px] grid-cols-[200px_1fr_200px] gap-2 h-screen p-2 bg-white text-black">
      {/* Nav */}
      <div className="bg-yellow-400 row-span-3 text-[24px] font-bold flex items-start justify-center border-2 border-white">
       <span className="mt-4"> Nav</span>
      </div>

      {/* Header */}
      <div className="bg-yellow-400 col-span-2 text-[24px] font-bold flex items-start justify-start border-2 border-white">
        <span className="ml-4">Header</span>
      </div>

      {/* Article */}
      <div className="bg-yellow-400 text-[24px] font-bold flex items-start justify-start border-2 border-white">
        <span className="ml-4">Article</span>
      </div>

      {/* Ads */}
      <div className="bg-yellow-400 row-span-2 text-[24px] font-bold flex items-start justify-center border-2 border-white">
      <span className="mt-4"> Ads</span>
      </div>

      {/* Footer */}
      <div className="bg-yellow-400 col-span-1 text-[24px] font-bold flex items-start justify-start border-2 border-white">
        <span className="ml-4">Footer</span>
      </div>
    </div>
  );
}
