import { getDetailedProps } from "@/types/utils";
import { ReactNode } from "react";

export default interface ButtonProps extends getDetailedProps<HTMLButtonElement>{
  children: ReactNode
  appearance: 'primary' | 'ghost'
  arrow?: 'right' | 'down' | 'none'
}