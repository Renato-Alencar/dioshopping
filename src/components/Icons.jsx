function Icons({ children, className }) {
  return children.map((icon, index) => {
    return (
      <li key={index}>
        <a href={icon.link || "#"} target={icon.target}>
          <i className={`${icon.content} ${className}`}></i>
        </a>
      </li>
    );
  });
}

export default Icons;
