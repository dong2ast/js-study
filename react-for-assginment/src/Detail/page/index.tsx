import BoardDetail from "../components/BoardDetail";
import CommentList from "../components/CommentList";
import { BoardContainer, Wrapper } from "./Detail.style";

function Detail() {
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
