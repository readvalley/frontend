export interface IDisplaySeries {
  category: string;
  hearts: number;
  hearted: boolean;
  creator: Partial<IDisplayCreator>;
  title: string;
  image: string;
  _id: string;
}

export interface IDisplayCreator {
  image: string;
  name: string;
  category: string;
  follower: number;
  _id: string;
}

export interface IDisplayWriting {
  image: string;
  title: string;
  hearts: number;
  hearted: boolean;
  series: Partial<IDisplaySeries>;
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
    name: string;
  };
  _id: string;
}
