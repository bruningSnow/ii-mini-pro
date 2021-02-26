import React from 'react';
import { View } from '@tarojs/components';

interface IProps {
  value: string;
  size: number;
  color: string;
  onClick?(): void;
}

const Icon = (props: IProps) => {
  const { value, size, color, onClick = () => {} } = props;

  return (
    <View
      className={`iconfont ${value}`}
      onClick={onClick}
      style={{ color, fontSize: `${size}px`, display: 'inline' }}
    ></View>
  );
};

export default Icon;