'use client';

export default function AddTopic() {

    return (
        <form className="flex flex-col gap-3">
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic title"></input>
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic description"></input>
            <button className="bg-blue-500 hover:bg-blue-600 font-bold text-white py-3 px-6 w-fir rounded-xl">Add Topic</button>
        </form>
    );
}