import { useParams } from "react-router-dom";
import BoardDetail from "../components/BoardDetail";
import CommentList from "../components/CommentList";
import { BoardContainer, Wrapper } from "./Detail.style";
import { api } from "../../libs/api";
import { useEffect, useState } from "react";

function Detail() {
  const { boardId } = useParams() as { boardId: string };

  const [data, setData] = useState<any>(null); // 데이터 상태 추가

  useEffect(() => {
    const getDetail = async (boardId: string) => {
      const { data } = await api.get(`/detail/${boardId}`);
      setData(data); // 데이터 설정
    };

    getDetail(boardId);
  }, [boardId]);

  // data가 정의되었는지 확인 후 처리
  if (!data) {
    return <div>Loading...</div>; // 데이터가 로드 중인 동안 표시할 내용
  }

  console.log(data.comment);

  return (
    <Wrapper>
      <BoardContainer>
        <BoardDetail data={data.body} />
        <CommentList data={data.comment} />
      </BoardContainer>
    </Wrapper>
  );
}

export default Detail;
