import { PostListProps } from "../../types/AnnouncementTypes";
import Board from "../Board";

function PostList(props: PostListProps) {
  const { data } = props;
  return (
    <>
      {data.map((element) => (
        <Board
          key={element.board_id}
          number={element.orderNum}
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
