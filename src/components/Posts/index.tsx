import Image from "next/image";
import React from "react";

const Posts = () => {
    return (
        <div className="flex justify-center">
            <div className="border-2 w-5/6 rounded border-pink-200 m-4 p-4">
                <div className="flex justify-between">
                    <div>
                        <p className="mb-2">Username</p>
                        <p className="mb-4">comment</p>
                        <div>
                            <Image src="/images/speech-bubble.png" width={25} height={25} alt={"comment"} />
                        </div>
                    </div>
                    <div>
                        <Image src="/images/picture.png" width={85} height={85} alt={"picture"} className="ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;