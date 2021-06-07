import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { PageContainer, TabBar } from '@/components/index';
import { TCurrentData } from '@/components/tab-bar/interface';

import styles from './index.module.scss';

const tabList = [
  {
    title: 'tab1',
    icon: 'home',
    path: '/componentsExample/tab-bar/index',
    dot: true,
    dotText: 99,
  },
  {
    title: 'tab2',
    icon: 'wode',
    path: '/componentsExample/tab-bar/index',
    dot: true,
    dotText: '气泡',
    dotBg: 'black',
  },
  {
    title: 'tab3',
    icon: 'richeng',
    path: '/componentsExample/tab-bar/index',
  },
];

const click = (current: number, data: TCurrentData) => {
  console.log('current =>', current);
  console.log('data =>', data);
};

const Index: React.FC<{}> = () => {
  return (
    <PageContainer
      className={styles.index}
      title="底部tabber"
      hasBack={true}
    >
      <View className={styles.item}>
        <TabBar
          current={1}
          tabList={tabList}
          style={{ position: 'relative' }}
          onClick={click}
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={1}
          tabList={tabList}
          style={{ position: 'relative' }}
          selectedColor="red"
          color="blue"
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={2}
          tabList={tabList}
          style={{ position: 'relative' }}
          selectedColor="blue"
          color="red"
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={3}
          tabList={tabList}
          selectedColor="#1AB857"
          color="blue"
        />
      </View>
    </PageContainer>
  );
};

export default Index;
