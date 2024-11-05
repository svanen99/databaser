import Image from "next/image";

const posts = () => {
    return (
        <div className="flex flex-col">
            <div>
                <h1 className="text-xl font-reddit m-4">Create a post</h1>
            </div>
            <div className="border-2 m-4 rounded-xl">
                <input className="m-2" type="text" placeholder="title" />
            </div>
            <div className="border-2 m-4 flex justify-center rounded-xl">
                <Image className="m-14" src="/images/photo.png" width={60} height={60} alt="empty image" />
            </div>
            <div className="border-2 m-4 rounded-xl flex justify-start">
                <input className="m-2" type="text" placeholder="text" />
            </div>
        </div>
    )
}

export default posts;