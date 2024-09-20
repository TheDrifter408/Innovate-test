export default function CTA(){
    return(
        <section className="mb-14 grid grid-cols-subgrid col-span-12 relative">
            <div className="wave w-full col-span-12">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="xMinYMax">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="flex col-span-12 items-center justify-around mt-10 z-10">
                <div className="w-32 h-32 mx-auto bg-[#C02424] transition-transform duration-200 col-span-2 col-start-3 hover:scale-125" />
                <div className="w-28 h-28 mx-auto bg-[#146FE8] col-span-2  transition-transform duration-200 hover:scale-125" />
                <div className="w-32 h-32 mx-auto bg-[#E76666] col-span-2  transition-transform duration-200 hover:scale-125" />
                <div className="w-28 h-28 mx-auto bg-[#A0FCD9] col-span-2  transition-transform duration-200 hover:scale-150" />
            </div>
        </section>
    );
}