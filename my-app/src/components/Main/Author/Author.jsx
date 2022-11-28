import './Author.css';

export default function Author({userName, profileImg, created}) {
  return (
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author"><img src="./images/profile.jpg" alt="" />{userName}</dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">{created}</dd>
    </dl>
  )
}