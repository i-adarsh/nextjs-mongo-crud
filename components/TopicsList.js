import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"

const getTopics = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/topics"); 
        if (!res.ok){
            console.error("Failed to fetch topics. Status:", res.status, "StatusText:", res.statusText);
            const errorBody = await res.text(); // try to get more error details
            console.error("Error body:", errorBody);
            throw new Error(`Failed to fetch topics. Status: ${res.status}`);
        }
        return res.json(); // This should return the array of topics directly
    }
    catch (error) {
        console.log("Error loading topics: ", error);
        return []; // Return an empty array in case of any error
    }
}

export default async function TopicsList() {
    const topics = await getTopics(); // topics should now be the array itself, or an empty array on error

    // Check if topics is an array before trying to map over it
    if (!Array.isArray(topics)) {
        console.error("Topics is not an array:", topics);
        return <p>Error: Topics could not be loaded correctly.</p>;
    }

    return (
        <>
        {topics.length > 0 ? (
            topics.map((t) => (
                <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <div>{t.description}</div>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn id={t._id} /> {/* Assuming RemoveBtn takes an id prop */}
                    <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24} />
                    </Link>
                </div>
                </div>
            ))
        ) : (
            <p>No topics found.</p> 
        )}
        </>
    );
}