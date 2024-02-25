import { api } from "../../libs/api";

const getDetail = async (boardId: string, setData: React.Dispatch<any>) => {
  const { data } = await api.get(`/detail/${boardId}`);
  setData(data);
};

export default getDetail;
