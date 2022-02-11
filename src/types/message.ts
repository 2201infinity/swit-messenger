export interface IMessage {
  id: number;
  userId: number;
  userName: string;
  profileImage: string;
  date: string;
  content: string;
  reply?: string;
}
