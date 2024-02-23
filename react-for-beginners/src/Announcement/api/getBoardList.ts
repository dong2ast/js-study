import { api } from "../../libs/api";

export async function getBoardList() {
  const data = await api.get(`/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.data.data.boardList;
}
