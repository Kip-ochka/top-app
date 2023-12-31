import { getDetailedProps } from "@/types/utils";
import { ReactNode } from "react";

export interface HtagProps extends getDetailedProps<HTMLHeadingElement> {
  Tag: 'h1'|'h2'|'h3'
  children: ReactNode
}