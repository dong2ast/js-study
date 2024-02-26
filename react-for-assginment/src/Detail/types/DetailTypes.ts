interface BoardDetail {
  title: string;
  body: string;
  createdAt: string;
}

export interface BoardDetailProps {
  data: BoardDetail;
}

interface Comment {
  id: number;
  nickname: string;
  content: string;
  createdAt: string;
}

export interface CommentProps {
  data: Comment[];
  boardId: string;
}

export interface DetailDataType {
  body: BoardDetail;
  comment: Comment[];
}
