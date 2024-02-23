import { useQuery } from "react-query";
import { getBoardList } from "../api/getBoardList";

export default function useGetBoardList() {
  const { boardList, isLoading } = useQuery(["useGetBoardList"], () =>
    getBoardList()
  );

  return { boardList, isLoading };
}
