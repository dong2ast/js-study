import { useQuery } from "react-query";
import { getBoardDetail } from "../api/getBoardDetail";

export default function useGetBoardDetail() {
  const { boardDetail, isLoading } = useQuery(["useGetBoardDetail"], () =>
    getBoardDetail()
  );

  return { boardDetail, isLoading };
}
