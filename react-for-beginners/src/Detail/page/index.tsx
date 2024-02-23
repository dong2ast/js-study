import { useParams } from "react-router-dom";
import useGetBoardDetail from "../hooks/useGetBoardDetail";

function Detail() {
  const { id } = useParams();
  const { boardDetail } = useGetBoardDetail(id);
  return <h1>{boardDetail}</h1>;
}

export default Detail;
