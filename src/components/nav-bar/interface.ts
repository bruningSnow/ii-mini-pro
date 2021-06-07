import { ReactNode } from 'react';

export interface NavBarProps {
  title: string;
  icon?: ReactNode;
  classname?: string;
  type?: 'homePage' | 'subPage';
  hasBack?: boolean;
  bgColor?: string;
  fontColor?: string;
}
