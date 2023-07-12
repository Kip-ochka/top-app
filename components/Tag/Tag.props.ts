import { getDetailedProps } from "@/types/utils";
import { ReactNode } from "react";

export interface TagProps extends getDetailedProps<HTMLDivElement>{
  size?: 's' | 'm'
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
  children: ReactNode
}