import { useEffect, useState } from "react";

import MenuBar from "../../../components/MenuBar";
import getBoardList from "../../api/getBoardList";
import Search from "../Search";
import { Column, ListWrapper, Wrapper, Text } from "./BoardList.style";
import PostList from "../PostList";
import Pagination from "../Pagination";

export interface BoardProps {
  board_id: number;
  title: string;
  createdAt: string;
}

const data = await getBoardList();

function BoardList() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [postData, setPostData] = useState<BoardProps[]>([
    {
      board_id: 0,
      title: "",
      createdAt: "",
    },
  ]);

  const BOARD_LIMIT = 4;
  const offset = (page - 1) * BOARD_LIMIT;

  const postingData = (BoardList: BoardProps[]) => {
    if (BoardList) {
      const result = BoardList.slice(offset, offset + BOARD_LIMIT);
      setPostData(result.reverse());
    }
  };

  useEffect(() => {
    postingData(data);
  }, [page]);

  /*필터링함수 */
  const handleInput = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("test" + value);
    event.preventDefault();
    const temp = data.filter((item: BoardProps) => {
      return item.title.includes(value);
    });
    console.log(temp);
  };
  return (
    <Wrapper>
      <MenuBar />
      <form onSubmit={handleInput}>
        <Search value={value} setValue={setValue} />
      </form>
      <ListWrapper>
        <Column>
          <Text>번호</Text>
          <Text>목록</Text>
          <Text>등록일</Text>
        </Column>

        <PostList data={postData} />
      </ListWrapper>

      <Pagination
        page={page}
        limit={BOARD_LIMIT}
        total={data.length}
        setPage={setPage}
      />
    </Wrapper>
  );
}

export default BoardList;
