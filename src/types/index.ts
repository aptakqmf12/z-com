interface UserInfo {
  id: string;
  image: string;
  nickname: string;
}

interface ImageInfo {
  imageId: number;
  link: string;
}

export interface User {
  user: UserInfo;
  Images: ImageInfo[];
  postId: number;
  createdAt: string;
  content: string;
}
