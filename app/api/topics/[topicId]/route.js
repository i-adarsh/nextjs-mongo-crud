import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic"

export async function PUT(request, {params}){
    const { topicId } = params;
    const {newTitle: title, newDescription: description} = await request.json();
    console.log(title, description);
    if(!title || !description) {
        return new Response(JSON.stringify({message: "Title and description are required"}), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    await connectMongoDB();
    await Topic.findByIdAndUpdate({_id: topicId}, {title, description}); // Corrected to findByIdAndUpdate
    return new Response(JSON.stringify({message: "Topic updated"}), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function GET(reest, {params}){
    const {topicId} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: topicId});
    return NextResponse.json({topic}, {status: 200});
}