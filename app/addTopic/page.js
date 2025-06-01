"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description);
    if (!title || !description) {
      alert("Please enter a title and description");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        });

        if (res.ok) {
          router.push("/");
        } else {
          throw new Error("failed to add topic");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic description"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 font-bold text-white py-3 px-6 w-fir rounded-xl"
      >
        Add Topic
      </button>
    </form>
  );
}
