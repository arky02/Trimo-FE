import { Destination, Stars, Tag } from "./client.types";

export type SingleReviewData = {
  reviewId: number;
  title: string;
  content: string;
  tagValues?: Tag;
  nickName: string;
  spotId: string;
  createdAt: string;
  modifiedAt: string;
  visitingTime: string;
  images?: string[];
  stars?: Stars;
};

export type SpotData = {
  averageStars: Stars;
} & Destination;
