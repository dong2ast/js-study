import useGetBoardList from "../../hooks/useGetBoardList";
import Board from "../Board";

function BoardList() {
  const { boardList } = useGetBoardList();
  console.log(boardList);
  // boardList.map((board) => {
  //   return (
  //     <Board
  //       board_id={board.board_id}
  //       title={board.title}
  //       content={board.content}
  //       createdAt={board.createdAt}
  //     />
  //   );
  // });
}

export default BoardList;
