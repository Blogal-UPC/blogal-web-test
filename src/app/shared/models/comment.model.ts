export interface Comment{
  id: number,
  author: string,
  date: Date,
  content: string,
  likes: number,
  dislikes: number,
  likedBy: number[], // ids
  dislikedBy: number[]
}
