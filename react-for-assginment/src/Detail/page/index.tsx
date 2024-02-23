import PostDetail from "../components/BoardDetail";
import { BoardContainer, Wrapper } from "./Detail.style";

function Detail() {
  return (
    <>
      <Wrapper>
        <BoardContainer>
          <PostDetail />
          <div>
            댓글창
            <div>댓글 수</div>
            <div>댓글 입력 창</div>
            <div>댓글 리스트</div>
          </div>
        </BoardContainer>
      </Wrapper>
    </>
  );
}

export default Detail;
