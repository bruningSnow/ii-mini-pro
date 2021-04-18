import { CSSProperties } from 'react';
import { NavBarProps } from '../nav-bar/interface';

export interface PageContainerProps extends NavBarProps {
  className?: string;
  style?: CSSProperties;
  children?: any;
}
