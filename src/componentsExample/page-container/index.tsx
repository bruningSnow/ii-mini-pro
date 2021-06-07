import React from 'react';
import { PageContainer } from '@/components/index';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => {

  return (
    <PageContainer
      className={styles.index}
      title="页面容器"
      hasBack={true}
    >
      内容 content 部分
    </PageContainer>
  );
};

export default Index;
