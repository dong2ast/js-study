import { ListType } from "../types/AnnouncementTypes";

const PostCount = (list: ListType[]) => {
  const temp = list.map((e, index) => {
    const type: ListType = {
      board_id: e.board_id,
      orderNum: index + 1,
      title: e.title,
      createdAt: e.createdAt,
    };
    return type;
  });
  return temp;
};

export default PostCount;
