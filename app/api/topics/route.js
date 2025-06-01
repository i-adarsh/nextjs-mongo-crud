import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic"

export async function POST(request) {
    const {title, description} = await request.json();
    console.log(title, description);
    await connectMongoDB();
    await Topic.create({title, description});
    return new Response(JSON.stringify({message: "Topic created"}), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return new Response(JSON.stringify(topics), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return new Response(JSON.stringify({message: "Topic deleted"}), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}