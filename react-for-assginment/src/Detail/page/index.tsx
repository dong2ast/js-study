import { useParams } from "react-router-dom";
import BoardDetail from "../components/BoardDetail";
import CommentList from "../components/CommentList";
import { BoardContainer, Wrapper } from "./Detail.style";
import { useEffect, useState } from "react";
import getDetail from "../api/getDetail";

function Detail() {
  const { boardId } = useParams() as { boardId: string };

  const [data, setData] = useState<any>(null); // 데이터 상태 추가

  useEffect(() => {
    getDetail(boardId, setData);
  }, [boardId]);

  // data가 정의되었는지 확인 후 처리
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <BoardContainer>
        <BoardDetail data={data.body} />
        <CommentList data={data.comment} boardId={boardId} />
      </BoardContainer>
    </Wrapper>
  );
}

export default Detail;
