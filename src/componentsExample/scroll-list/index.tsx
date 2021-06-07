import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { useSelector } from 'react-redux';
import { View } from '@tarojs/components';
import useDispatchMock from '@/utils/useDispatch';
import { connectState } from '@/models/index';
import { IState as mockState } from '@/models/mock/interface';
import { PageContainer, ScrollList } from '@/components/index';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const { scrollList }: mockState = useSelector(
    (state: connectState) => state.mock,
  );
  const { fetchList } = useDispatchMock();

  const refresh = () => {
    console.log('开始请求刷新');
    setLoading(true);
    if (process.env.TARO_ENV === 'h5') {
      return fetchList({ page: 1, size: 10 }).then(() => {
        setLoading(false);
      });
    }
    setTimeout(() => {
      console.log('请求刷新结束');
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (process.env.TARO_ENV === 'h5') {
      fetchList({ page: 1, size: 10 });
    }
  }, []);

  return (
    <PageContainer
      className={styles.index}
      title="滚动列表（包含下拉刷新，加载）"
      hasBack={true}
    >
      <ScrollList
        hasRefresh={true}
        loading={loading}
        onRefresh={refresh}
        distance={55}
      >
        {scrollList.map((item: any, index: number) => (
          <View className={styles.item} key={index}>
            {item.value || '999'}
          </View>
        ))}
      </ScrollList>
    </PageContainer>
  );
};

export default Index;
