import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-slate-800 text-white px-6 py-6 rounded-2xl">
            <Link className="text-xl font-semibold" href="/">Home</Link>
            <Link className="text-l bg-white text-black p-3 rounded-xl" href="/addTopic">Add Topic</Link>
        </nav>
    );
}
