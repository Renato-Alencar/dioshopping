function Alert({ children, type = "warning", exit = false }) {
  return (
    <article
      className={`alert alert-${type} alert-dismissible fade show mt-2`}
      role="alert"
    >
      <strong>{children}</strong>
      {exit && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      )}
    </article>
  );
}

export default Alert;
