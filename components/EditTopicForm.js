export default function EditTopicForm() {
    return (
        <form className="flex flex-col gap-3">
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic title"></input>
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic description"></input>
            <button className="bg-green-500 hover:bg-green-600 font-bold text-white py-3 px-6 w-fir rounded-xl">Update Topic</button>
        </form>
    );
}