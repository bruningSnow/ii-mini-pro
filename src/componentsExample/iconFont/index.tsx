import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { PageContainer } from '@/components/index';
import IconFont from '../../components/iconfont';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  return (
    <PageContainer
      className={styles.index}
      title="图标"
      hasBack={true}
    >
      <View className={styles.iconItem_1}>
        <IconFont name="home" color="red" size={30} />
      </View>
      <View className={styles.iconItem_2}>
        <IconFont name="wode" color="blue" size={50} />
      </View>
      <View className={styles.iconItem_3}>
        <IconFont name="richeng" color="#1AB857" size={100} />
      </View>
    </PageContainer>
  );
};

export default Index;
