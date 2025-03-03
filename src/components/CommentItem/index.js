import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment, istogglebtn, handledelete} = props

  const specialClass = eachComment.isspecial

  const likebtn = () => {
    istogglebtn(eachComment.id)
  }

  const deletebtn = () => {
    handledelete(eachComment.id)
  }

  const likeimage = eachComment.isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likebtncolor = eachComment.isFavourite ? 'blue' : ''

  return (
    <li className="comment-item">
      <div>
        <div className="commentsection">
          <p className={`profile ${specialClass}`}>{eachComment.name[0]}</p>
          <div>
            <div className="singlerow">
              <p>{eachComment.name}</p>
              <p className="time">
                {formatDistanceToNow(new Date(eachComment.timestamp))} ago
              </p>
            </div>
            <p>{eachComment.comment}</p>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="likeContainer">
            <img src={likeimage} alt="like" className="img" onClick={likebtn} />
            <button
              type="button"
              className={`deletebtn ${likebtncolor}`}
              onClick={likebtn}
            >
              Like
            </button>
          </div>
          <button
            type="button"
            className="button"
            onClick={deletebtn}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="deleteimage"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
