import React from 'react';
import ClassName from 'classnames';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { NavBar } from '@/components/index';

import { PageContainerProps } from './interface';
import styles from './index.module.scss';

const PageContainer = (props: PageContainerProps) => {
  const { className, children, style, ...rest } = props;

  return (
    <View className={styles.index}>
      <NavBar {...rest} />
      <View className={ClassName(styles.content, className)} style={style}>
        {children}
      </View>
    </View>
  );
};

export default PageContainer;
