export enum Status {
  "PUBLIC",
  "HIDED",
}

export interface IDisplaySeries {
  category: string;
  hearts: number;
  hearted: boolean;
  creator: Partial<IDisplayCreator>;
  title: string;
  image: string;
  intro?: string;
  writings?: Partial<IDisplayWriting>[];
  comments?: Partial<IDisplayComment>[];
  currentReading?: number;
  purchases?: number;
  _id: string;
}

export interface IDisplayCreator {
  image: string;
  name: string;
  category: string;
  follower: number;
  isFollowing: boolean;
  intro: string;
  serieses: Partial<IDisplaySeries>[];
  comments: Partial<IDisplayComment>[];
  _id: string;
}

export interface IDisplayWriting {
  image: string;
  title: string;
  hearts: number;
  hearted: boolean;
  series: Partial<IDisplaySeries>;
  price: number;
  purchases: number;
  status: Status;
  _id: string;
}

export interface IUser {
  name: string;
  image: string;
}

export interface IDisplayComment {
  author: Partial<IUser>;
  content: string;
  date: Date;
  target: {
    type: "creator" | "series";
    id: string;
    name?: string;
  };
  _id: string;
}
