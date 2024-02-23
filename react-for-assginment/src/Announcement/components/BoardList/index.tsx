import {
  LeftArrow,
  LeftArrows,
  RightArrow,
  RightArrows,
} from "../../../assets";
import MenuBar from "../../../components/MenuBar";
import Board from "../Board";
import Search from "../Search";
import { Column, ListWrapper, Wrapper, Text } from "./BoardList.style";

const List = [
  { id: 1, title: "월간 축제 어쩌구", date: "2023.10.1" },
  { id: 2, title: "월간 축제 어쩌구", date: "2023.10.1" },
  { id: 3, title: "월간 축제 어쩌구", date: "2023.10.1" },
  { id: 4, title: "월간 축제 어쩌구", date: "2023.10.1" },
];

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
          {List.map((element) => (
            <Board
              key={element.id}
              number={element.id}
              title={element.title}
              date={element.date}
            />
          ))}
          '
        </div>
      </ListWrapper>
      <div>
        <img src={LeftArrows} />
        <img src={LeftArrow} />
        페이지네이션
        <img src={RightArrow} />
        <img src={RightArrows} />
      </div>
    </Wrapper>
  );
}

export default BoardList;
