import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/topics`, { cache: 'no-store' }); // Use absolute URL
    if (!res.ok) {
      console.error(
        "Failed to fetch topics. Status:",
        res.status,
        "StatusText:",
        res.statusText
      );
      const errorBody = await res.text(); // try to get more error details
      console.error("Error body:", errorBody);
      throw new Error(`Failed to fetch topics. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    // It's important to throw the error or return a specific error object
    // if the component needs to know about the failure.
    // For now, returning an empty array as before.
    return []; 
  }
};

export default async function TopicsList() {
  const topics = await getTopics();

  if (!Array.isArray(topics)) {
    console.error("Topics is not an array:", topics);
    // It's good to provide feedback to the user if data loading fails
    return <p>Error: Topics data could not be loaded correctly. Please check the console for more details.</p>;
  }

  return (
    <>
      {topics.length > 0 ? (
        topics.map((t) => (
          <div
            key={t._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No topics found. (This could also indicate an error in fetching data if topics were expected)</p>
      )}
    </>
  );
}
