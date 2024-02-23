import { Wrapper, Text } from "./Board.style";

interface BoardProps {
  key: number;
  number: number;
  title: string;
  date: string;
}

function Board(props: BoardProps) {
  //구조분해할당
  const { number, title, date } = props;
  return (
    <Wrapper>
      <Text>{number}</Text>
      <Text>{title}</Text>
      <Text>{date}</Text>
    </Wrapper>
  );
}

export default Board;
