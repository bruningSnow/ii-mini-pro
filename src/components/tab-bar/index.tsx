import React from 'react';
import ClassName from 'classnames';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import IconFont from '@/components/iconfont';

import { TTab, TabBarProps } from './interface';
import styles from './index.module.scss';

const TabBar: React.FC<TabBarProps> = (props) => {
  const {
    current,
    tabList,
    backgroundColor = '#fff',
    iconSize = 40,
    fontSize = 14,
    color = '#98989E',
    selectedColor = '#0069FF',
    style = {},
    classname = '',
    onClick = () => {},
  } = props;

  const renderTab = (tab: TTab, index: number = 1) => {
    const {
      title,
      icon,
      path = '',
      dot = false,
      dotText = '',
      dotBg = 'red',
      dotColor = '#fff',
    } = tab;
    return (
      <View
        className={styles.tab}
        onClick={() => onClick(index, { title, path, dotText })}
      >
        <View
          className={styles.point}
          style={{
            visibility: dot ? 'visible' : 'hidden',
            background: dotBg,
            color: dotColor,
          }}
        >
          {dotText}
        </View>
        <IconFont
          name={icon as any}
          size={iconSize}
          color={current === index ? selectedColor : color}
        />
        <View
          style={{
            fontSize: `${fontSize}px`,
            color: current === index ? selectedColor : color,
          }}
        >
          {tab.title}
        </View>
      </View>
    );
  };
  return (
    <View
      className={ClassName(styles.tabBar, classname)}
      style={{ ...style, backgroundColor }}
    >
      {tabList.map((tab, index) => renderTab(tab, index + 1))}
    </View>
  );
};

export default TabBar;

export { TabBarProps }
