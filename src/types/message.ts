export interface IMessage {
  userId: number;
  userName: string;
  profileImage: string;
  date: string;
  content: string;
  status: boolean; //@Note 현재 대화에 참여중인지 아닌지를 나타내는 상태값
}
