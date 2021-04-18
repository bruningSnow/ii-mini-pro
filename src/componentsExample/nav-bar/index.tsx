import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import { View } from '@tarojs/components';
import { PageContainer, NavBar } from '@/components/index';

import IconFont from '../../components/iconfont';
import styles from './index.module.scss';

const Index = () => {
  const [hasBack, setHasBack] = useState(true);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fontColor, setFontColor] = useState('#464a5a');
  const [icon, setIcon] = useState<any>('');

  const init = () => {
    setHasBack(true);
    setBgColor('#ffffff');
    setFontColor('#464a5a');
    setIcon('');
  };

  return (
    <PageContainer
      className={styles.index}
      title="微信导航栏"
      path="/componentsExample/nav-bar/index"
      hasBack={true}
    >
      <NavBar
        title="导航栏"
        path="/componentsExample/nav-bar/index"
        hasBack={hasBack}
        bgColor={bgColor}
        fontColor={fontColor}
        icon={icon}
      />
      <View className={styles.item}>
        <AtButton className={styles.button} onClick={() => init()}>
          初始化
        </AtButton>
        <AtButton className={styles.button} onClick={() => setHasBack(false)}>
          禁止返回键
        </AtButton>
        <AtButton className={styles.button} onClick={() => setBgColor('red')}>
          改变背景为红色
        </AtButton>
        <AtButton
          className={styles.button}
          onClick={() => setFontColor('blue')}
        >
          改变字体为蓝色
        </AtButton>
        <AtButton
          className={styles.button}
          onClick={() =>
            setIcon(<IconFont name="home" size={40} color="#1AB857" />)
          }
        >
          改变返回icon
        </AtButton>
      </View>
    </PageContainer>
  );
};

export default Index;
