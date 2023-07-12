import { getDetailedProps } from "@/types/utils";

export interface RatingProps extends getDetailedProps<HTMLDivElement> {
  isEditable?: boolean
  rating: number
  setRating?: (rating: number) => void
}