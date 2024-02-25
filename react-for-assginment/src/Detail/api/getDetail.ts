import { api } from "../../libs/api";

const getDetail = async (boardId: string) => {
  const { data } = await api.get(`/detail/${boardId}`);
  return data;
};

export default getDetail;
