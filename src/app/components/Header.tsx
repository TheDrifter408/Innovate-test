export default function Header(){
    return(
        <header className="grid grid-cols-subgrid col-span-12 p-4 bg-[#363636] text-white border border-b-black border-x-[#363636] border-t-[#363636]">
            <nav className="col-span-8 grid grid-cols-subgrid items-center">
                <a className="w-full col-span-2 text-center" href="">Home <span className="rounded-full px-2">&or;</span></a>
                <a  className="w-full col-span-2 text-center" href="">Event <span className="rounded-full px-2 py-1">&or;</span></a>
                <a  className="w-full col-span-2 text-center" href="">Contact <span className="rounded-full px-2">&or;</span></a>
                <a  className="w-full col-span-2 text-center" href="">Blog <span className="rounded-full px-2">&or;</span></a>
            </nav>
            <form className="col-start-9">
                <input className="px-2 rounded-xl" placeholder="Search" />
            </form>
        </header>
    );
}