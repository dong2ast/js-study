import { api } from "../../libs/api";

export async function getBoardDetail(id) {
  const data = await api.get(`/detail/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.data.data.boardList;
}
