import React, { useState } from 'react';
import ClassNames from 'classnames';
import { useDidShow, getCurrentInstance, getStorageSync, reLaunch, setStorageSync, getMenuButtonBoundingClientRect } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import { NavBarProps } from './interface';
import defaultBack from './back.png';
import styles from './index.module.scss';


const NavBar: React.FC<NavBarProps> = (props) => {
  const {
    title,
    icon = '',
    classname = '',
    type = 'subPage',
    hasBack = true,
    bgColor = '#ffffff',
    fontColor = '#464a5a',
  } = props;
  const [NavBarHeight, setNavBarHeight] = useState(0);
  const [NavBarPaddingTop, setNavBarPaddingTop] = useState(0);
  const [menuButtonHeight, setMenuButtonHeight] = useState(0);

  useDidShow(async () => {
    await saveRouters();
    if (process.env.TARO_ENV === 'weapp') {
      getNavBarHeight();
    }
  });

  const back = async () => {
    const routers = (await getStorageSync('routers')) || [];
    if (!routers.length) {
      return;
    }

    const currentUrl =
      routers[routers.length - 2] || routers[routers.length - 1];
    const success = () => {
      routers.pop();
      setStorageSync('routers', routers);
    };

    reLaunch({
      url: currentUrl,
      success,
    });
  };

  const saveRouters = async () => {
    const { path = '' } = getCurrentInstance().router as objectType
    if (!path) {
      return;
    }
    const routers = getStorageSync('routers') || [];

    // 如果当前路由是首页路由
    if (type === 'homePage') {
      // 清空历史路由缓存，并初始化路由缓存
      return await setStorageSync('routers', [path]);
    }

    // 如果某个页面重复请求，则不存储此次路由记录
    if (routers.length > 0 && routers[routers.length - 1] === path) {
      return;
    }

    await setStorageSync('routers', [...routers, path]);
  };

  // 获取 NavBar 高度（适配不同机型）
  const getNavBarHeight = () => {
    const menuButtonInfo = getMenuButtonBoundingClientRect(); //胶囊相关信息
    const { top, height } = menuButtonInfo;
    setNavBarHeight(top + height + 10);
    setNavBarPaddingTop(top);
    setMenuButtonHeight(height);
  };

  return (
    <View
      className={ClassNames('', classname)}
      style={{ position: 'relative' }}
    >
      {title && process.env.TARO_ENV === 'weapp' && (
        <View>
          <View
            style={{
              height: `${NavBarHeight}px`,
            }}
          ></View>
          <View
            className={styles.navContainer}
            style={{
              background: bgColor,
              height: `${NavBarHeight}px`,
              paddingTop: `${NavBarPaddingTop}px`,
            }}
          >
            <View
              style={{
                position: 'relative',
                height: `${menuButtonHeight}px`,
              }}
            >
              {hasBack && (
                <View className={styles.backIconWrap} onClick={back}>
                  {icon ? (
                    icon
                  ) : (
                    <Image src={defaultBack} className={styles.backIcon} />
                  )}
                </View>
              )}
              <View className={styles.title} style={{ color: fontColor }}>
                {title}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default NavBar;

export { NavBarProps }
