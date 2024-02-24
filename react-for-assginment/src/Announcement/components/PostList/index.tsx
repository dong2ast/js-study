import Board from "../Board";
import { BoardProps } from "../BoardList";

interface PostListProps {
  data: BoardProps[];
}

function PostList(props: PostListProps) {
  const { data } = props;
  return (
    <>
      {data.map((element) => (
        <Board
          key={element.board_id}
          number={element.board_id - 1}
          title={element.title}
          createdAt={element.createdAt
            .slice(0, 10)
            .replace("-", ". ")
            .replace("-", ". ")}
        />
      ))}
    </>
  );
}

export default PostList;
