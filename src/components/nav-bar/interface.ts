import { ReactElement } from 'react';

export interface NavBarProps {
  title: string;
  path: string;
  icon?: ReactElement | string;
  classname?: string;
  type?: 'homePage' | 'subPage';
  hasBack?: boolean;
  bgColor?: string;
  fontColor?: string;
}
