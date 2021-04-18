import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { PageContainer } from '@/components/index';

import styles from './index.module.scss';

const Index = () => {

  return (
    <PageContainer
      className={styles.index}
      title="页面容器"
      path="/componentsExample/page-container/index"
      hasBack={true}
    >
      内容 content 部分
    </PageContainer>
  );
};

export default Index;
