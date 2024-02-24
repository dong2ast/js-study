import { useParams } from "react-router-dom";
import BoardDetail from "../components/BoardDetail";
import CommentList from "../components/CommentList";
import { BoardContainer, Wrapper } from "./Detail.style";
import getDetail from "../api/getDetail";

function Detail() {
  const { boardId } = useParams() as { boardId: string };
  const data = getDetail(Number(boardId));

  return (
    <Wrapper>
      <BoardContainer>
        <BoardDetail />
        <CommentList />
      </BoardContainer>
    </Wrapper>
  );
}

export default Detail;
