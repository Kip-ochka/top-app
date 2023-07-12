import { getDetailedProps } from "@/types/utils";
import { ReactNode } from "react";

export interface ParagraphProps extends getDetailedProps<HTMLParagraphElement> {
  size?: 's' | 'm' | 'l'
  children: ReactNode
}