export interface ListType {
  board_id: number;
  orderNum: number;
  title: string;
  createdAt: string;
}

export interface postingDataProps {
  list: ListType[];
  page: number;
  BOARD_LIMIT: number;
  setPostData: React.Dispatch<React.SetStateAction<ListType[]>>;
}

export interface PostListProps {
  data: ListType[];
}

export interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
