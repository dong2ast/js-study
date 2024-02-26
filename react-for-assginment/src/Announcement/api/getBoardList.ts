import { api } from "../../libs/api";
import { ListType } from "../types/AnnouncementTypes";

const getBoardList = async () => {
  const { data } = await api.get<ListType[]>(`/`);

  const temp = data.map((e, index) => {
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

export default getBoardList;
