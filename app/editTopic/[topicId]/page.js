import EditTopicForm from "../../../components/EditTopicForm";

const getTopicById = async ({ topicId }) => {
  console.log("id: ", topicId);
  try {
    const res = await fetch(`/api/topics/${topicId}`, {
      cache: "no-store",
    });
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

export default async function EditTopic({ params }) {
//   const topicId = await params.topicId;
    const { topicId } = await params;
  const topic = await getTopicById({ topicId });
  const { title, description } = topic.topic;

  return (
    <EditTopicForm topicId={topicId} title={title} description={description} />
  );
}
