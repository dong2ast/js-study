import { api } from "../../libs/api";

const getBoardList = async () => {
  const { data } = await api.get(`/`);
  return data;
};

export default getBoardList;
