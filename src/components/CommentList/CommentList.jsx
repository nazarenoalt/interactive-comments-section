import { useEffect, useState } from "react"
import Comment from "../Comment/Comment"

const CommentList =  () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const data = await fetch('/data.json');

      const result = await data.json();
      setComments(result.comments);
    }
    fetchData();
  }, []);

  console.log(comments);
  return (
    <div>
      {comments.map(comment => {
        return(
          <Comment key={comment.id} />
        )
      })}
    </div>
  )
}

export default CommentList