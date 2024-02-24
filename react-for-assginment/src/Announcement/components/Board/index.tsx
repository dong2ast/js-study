import { Wrapper, Text } from "./Board.style";

interface BoardProps {
  key: number;
  number: number;
  title: string;
  createdAt: string;
}

function Board(props: BoardProps) {
  //구조분해할당
  const { number, title, createdAt } = props;
  return (
    <Wrapper>
      <Text>{number}</Text>
      <Text>{title}</Text>
      <Text>{createdAt}</Text>
    </Wrapper>
  );
}

export default Board;
