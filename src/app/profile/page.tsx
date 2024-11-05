import Image from "next/image";

const profile = () => {
    return (
        <>
        <div className="flex justify-center items-center">
                <div className="flex items-center space-x-2 m-4">
                    <Image src="/images/pp.png"width={95} height={95} alt={"profile-pic"} className="ml-auto"/>
                    <Image src="/images/edit.png"width={20} height={20} alt={"profile-pic"} className="ml-auto cursor-pointer"/>
                </div>
            <div className="flex flex-col m-4">
                <p className="text-xl font-extralight">Welcome, user.name!</p>
            </div>
            </div>

            <div className="flex flex-col p-4">
                <h1 className="text-4xl text-pink-400 font-light mb-6">Posts</h1>
                <ul className="space-y-4">
                    <li className="border-2 rounded-lg border-pink-300 p-4 bg-white shadow-md">
                        <p className="text-lg text-gray-700">Mean people at the store</p>
                        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">view</button> 
                    </li>
                    <li className="border-2 rounded-lg border-pink-300 p-4 bg-white shadow-md">
                        <p className="text-lg text-gray-700">Free cats as paycheck?</p>
                        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">view</button> 
                    </li>
                    <li className="border-2 rounded-lg border-pink-300 p-4 bg-white shadow-md">
                        <p className="text-lg text-gray-700">Working from home or jail?</p>
                        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">view</button> 
                    </li>
                    <li className="border-2 rounded-lg border-pink-300 p-4 bg-white shadow-md">
                        <p className="text-lg text-gray-700">One ice coffee per day</p>
                        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">view</button> 
                    </li>
                    <li className="border-2 rounded-lg border-pink-300 p-4 bg-white shadow-md">
                        <p className="text-lg text-gray-700">More mean people at the store?</p>
                        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">view</button> 
                    </li>
                    <li className="border-2 rounded-lg border-pink-300 p-4 bg-white shadow-md">
                        <p className="text-lg text-gray-700">Death to all who are mean to animals</p>
                        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">view</button> 
                    </li>
                    <li className="border-2 rounded-lg border-pink-300 p-4 bg-white shadow-md">
                        <p className="text-lg text-gray-700">Haircuts are way to expensive</p>
                        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">view</button> 
                    </li>
                </ul>
        </div>
        </>
    )
}

export default profile;