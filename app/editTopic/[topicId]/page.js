import EditTopicForm from "../../../components/EditTopicForm";

const getTopicById = async ({ topicId }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics?id=${topicId}`);
    if (!res.ok) {
      console.error(
        "Failed to fetch topic by ID. Status:",
        res.status,
        "StatusText:",
        res.statusText
      );
      const errorBody = await res.text(); // try to get more error details
      console.error("Error body:", errorBody);
      throw new Error(`Failed to fetch topic  by ID. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topic: ", error);
    return null;
  }
};

export default function EditTopic({ params }) {
  const { topicId } = params;
  const topic = getTopicById({ topicId });
  const { title, description } = topic;
  console.log("id: ", topicId);

  return (
    <EditTopicForm topicId={topicId} title={title} description={description} />
  );
}
