export default function Card({title,imageUrl}){
    return (
        <div className="post">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title?.slice(0,6)} />
        </div>
    )
}