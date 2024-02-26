import { api } from "../../libs/api";

interface postCommentProps {
  content: string;
  boardId: number;
  nickname: string;
}

const postComment = ({ content, boardId, nickname }: postCommentProps) => {
  const response = api.post("/detail/comment", {
    content: content,
    board_id: boardId,
    nickname: nickname,
  });
  return response;
};

export default postComment;
