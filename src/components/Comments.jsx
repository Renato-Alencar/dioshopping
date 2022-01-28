function Comments({ children, className }) {
  return children.map((comment) => {
    return (
      <article className={`card mt-2 ${className}`} key={comment.id}>
        <div className="card-body">
          <h5 className="card-title">{comment.email}</h5>
          <p className="card-text">{comment.message}</p>
          <p className="card-text">
            <small className="text-muted">{comment.created_at}</small>
          </p>
        </div>
      </article>
    );
  });
}

export default Comments;
