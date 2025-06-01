"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ topicId, title, description }) {
  console.log("Test: ", topicId, title, description);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description);
    console.log(newTitle, newDescription);
    if (!newTitle || !newDescription) {
      alert("Please enter a title and description");
    } else {
      try {
        const res = await fetch(
          `https://3000-w-adarshkr-m1u5v4bi-gpu.cluster-paq6lai5trel4t5la2vgoxzaba.cloudworkstations.dev/api/topics/${topicId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newTitle, newDescription }),
          }
        );
        if (res.ok) {
          router.refresh();
          router.push("/");
        } else {
          throw new Error("failed to update topic");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic description"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 font-bold text-white py-3 px-6 w-fir rounded-xl"
      >
        Update Topic
      </button>
    </form>
  );
}
