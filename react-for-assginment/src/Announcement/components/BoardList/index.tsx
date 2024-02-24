import { useEffect, useState } from "react";
import {
  LeftArrow,
  LeftArrows,
  RightArrow,
  RightArrows,
} from "../../../assets";
import MenuBar from "../../../components/MenuBar";
import getBoardList from "../../api/getBoardList";
import Board from "../Board";
import Search from "../Search";
import { Column, ListWrapper, Wrapper, Text } from "./BoardList.style";

interface BoardProps {
  board_id: number;
  title: string;
  content: string;
  createdAt: string;
}

const data = await getBoardList();

function BoardList() {
  return (
    <Wrapper>
      <MenuBar />
      <Search />
      <ListWrapper>
        <Column>
          <Text>번호</Text>
          <Text>목록</Text>
          <Text>등록일</Text>
        </Column>
        <div>
          {data.map((element: BoardProps, index: number) => (
            <Board
              key={element.board_id}
              number={index}
              title={element.title}
              createdAt={element.createdAt
                .slice(0, 10)
                .replace("-", ". ")
                .replace("-", ". ")}
            />
          ))}
        </div>
      </ListWrapper>
      <div>
        <LeftArrows />
        <LeftArrow />
        페이지네이션
        <RightArrow />
        <RightArrows />
      </div>
    </Wrapper>
  );
}

export default BoardList;
