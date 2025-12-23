import { useState, useEffect } from "react"
import Card from "./card"

export default function Posts() {

    const [posts, setPosts] = useState([])


    const url = "https://jsonplaceholder.typicode.com/photos"
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log(err.message))
    }, [])


    return (
        <>
            <h2>Posts</h2>
            <div className="posts">
                {
                    posts?.map((post) => {
                        return (
                            <Card
                                key={post?.id}
                                title={post?.title}
                                imageUrl={post?.thumbnailUrl}
                            />
                        )
                    })
                }


            </div>
        </>
    )
}