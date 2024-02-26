import { api } from "../../libs/api";
import { DetailDataType } from "../types/DetailTypes";

const getDetail = async (
  boardId: string,
  setData: React.Dispatch<DetailDataType>
) => {
  const { data } = await api.get(`/detail/${boardId}`);
  setData(data);
};

export default getDetail;
