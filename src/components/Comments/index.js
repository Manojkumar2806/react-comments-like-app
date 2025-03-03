import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {totalcomments: 0, name: '', comment: '', commentList: []}

  onAddcomment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isFavourite: false,
      timestamp: new Date(),
      isspecial: this.checkthecolor(),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      totalcomments: prevState.totalcomments + 1,
    }))
  }

  checkthecolor = () =>
    initialContainerBackgroundClassNames[
      Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
    ]

  handleinput = event => {
    this.setState({name: event.target.value})
  }

  handletextArea = event => {
    this.setState({comment: event.target.value})
  }

  handledelete = id => {
    const {commentList} = this.state
    const afterdeleteddate = commentList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentList: afterdeleteddate,
      totalcomments: prevState.totalcomments - 1,
    }))
  }

  istooglebtn = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isFavourite: !eachComment.isFavourite}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {totalcomments, name, comment, commentList} = this.state
    return (
      <div className="Contaiener">
        <h1>Comments</h1>
        <div className="SubContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <div className="inputContainer">
            <p className="descripton">Say Something about 4.o Technologies</p>
            <form onSubmit={this.onAddcomment} className="formContainer">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.handleinput}
              />
              <textarea
                placeholder="Your Comment"
                value={comment}
                onChange={this.handletextArea}
              />
              <div>
                <button type="submit">Add Comment</button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="spanContaineer">
          <div className="CommentsCount">{totalcomments}</div>
          <span>Comments</span>
        </div>
        <ul>
          {commentList.map(eachComment => (
            <CommentItem
              eachComment={eachComment}
              key={eachComment.id}
              istogglebtn={this.istooglebtn}
              handledelete={this.handledelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
