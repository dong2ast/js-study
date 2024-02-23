function Board(prop) {
  const { board_id, title, content, createdAt } = prop;

  return (
    <div>
      <p>{board_id}</p>
      <p>{title}</p>
      <p>{content}</p>
      <p>{createdAt}</p>
    </div>
  );
}

export default Board;
