import { useEffect, useState } from "react";

import MenuBar from "../../../components/MenuBar";
import getBoardList from "../../api/getBoardList";
import Search from "../Search";
import { Column, ListWrapper, Wrapper, Text } from "./BoardList.style";
import PostList from "../PostList";
import Pagination from "../Pagination";
import postingData from "../../utils/PostingData";
import { ListType } from "../../types/AnnouncementTypes";
import PostCount from "../../utils/PostCount";

const BOARD_LIMIT = 4;
const data = await getBoardList();

function BoardList() {
  const [value, setValue] = useState(""); //input
  const [search, setSearch] = useState(""); //enter
  const [list, setList] = useState<ListType[]>(PostCount(data)); //filter
  const [page, setPage] = useState(1); //page
  const [postData, setPostData] = useState<ListType[]>([
    {
      board_id: 0,
      orderNum: 0,
      title: "",
      createdAt: "",
    },
  ]); //layout data

  /** input으로 입력받은 값대로 List 필터링 */
  const filteringList = (search: string) => {
    const filteredList = data.filter((item) => {
      return item.title.includes(search);
    });
    setList(PostCount(filteredList)); //필터링 된 리스트 state에 저장
  };

  useEffect(() => {
    // 입력된 검색어가 있을 경우
    if (search !== "") {
      filteringList(search); //검색어대로 리스트 필터링 진행
      setPage(1); // 화면에 보여줄 기본 페이지는 첫페이지니까 1로 초기화
      setSearch(""); //검색 이후에 search 비워주기
    }

    postingData({ list, page, BOARD_LIMIT, setPostData });
  }, [page, search]);

  return (
    <Wrapper>
      <MenuBar />
      <Search value={value} setValue={setValue} setSearch={setSearch} />
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
        total={list.length}
        setPage={setPage}
      />
    </Wrapper>
  );
}

export default BoardList;
