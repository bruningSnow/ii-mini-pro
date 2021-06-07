import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { PageContainer } from '@/components/index';

import { ComponentList } from './index.config';
import styles from './index.module.scss';

interface IRenderItem {
  title: string;
  url: string;
}

const Index: React.FC<{}> = () => {
  const renderItem = ({ title, url }: IRenderItem, key: number) => (
    <View
      key={key}
      className={styles.item}
      onClick={() => Taro.navigateTo({ url: `/componentsExample/${url}` })}
    >
      <Text>{title}</Text>
      <View className={styles.itemIcon}></View>
    </View>
  );

  return (
    <PageContainer
      className={styles.index}
      title="ii-mini-pro"
      type="homePage"
      hasBack={false}
    >
      {ComponentList.map((component: IRenderItem, index: number) =>
        renderItem(component, index),
      )}
    </PageContainer>
  );
};

export default Index;
