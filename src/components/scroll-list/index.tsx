import React, { useState, useEffect } from 'react';
import ClassNames from 'classnames';
import Taro from '@tarojs/taro';
import { View, ScrollView, Image } from '@tarojs/components';
import defaultIcon from './loading.png';

import { ScrollListProps } from './interface';
import './index.scss';

let starDistance = 0;

const ScrollList: React.FC<ScrollListProps> = (props) => {
  const {
    children,
    className,
    distance = 55,
    loading = false,
    hasRefresh = false,
    hasMore = false,
    nodataText = '暂无数据',
    list = [' '],
    onRefresh = () => {},
    ...rest
  } = props;
  const [topDistance, setTopDistance] = useState(0);

  // 监听下拉起始动作
  const onTouchStart = (e) => {
    starDistance = e.changedTouches[0].clientY;
  };

  // 监听下拉终止动作
  const onTouchEnd = async () => {
    if (topDistance > 40) {
      onRefresh();
      setTimeout(() => {
        setTopDistance(0);
      }, 10000);
    } else {
      setTopDistance(0);
    }
  };

  // 监听下拉进行时动作
  const onTouchMove = (e) => {
    const newDistance = e.changedTouches[0].clientY - starDistance;
    const query = Taro.createSelectorQuery();

    if (!hasRefresh) {
      return;
    }

    query.select('#scroll').boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(function (res) {
      const { scrollTop = 0 } = res[1];
      if (
        scrollTop < 15 &&
        !loading &&
        newDistance > 2 &&
        newDistance < distance
      ) {
        setTopDistance(newDistance);
      }
    });
  };

  // 请求加载完毕 topDistance 置零
  useEffect(() => {
    if (!loading) {
      setTopDistance(0);
    }
  }, [loading]);

  return (
    <ScrollView
      {...rest}
      id="scroll"
      className={ClassNames('common-ScrollList', className)}
      scrollY={true}
      scrollWithAnimation
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      {hasRefresh && (
        <View
          className="pullRefresh"
          style={{ marginTop: `${topDistance - 30}px` }}
        >
          <Image src={defaultIcon} className="loading" />
        </View>
      )}
      {/* {!list.length && <NoData nodataText={nodataText} />} */}
      {Boolean(list.length) && children}
      {hasMore && (
        <View className="loadingMore">
          <Image src={defaultIcon} className="loading" />
        </View>
      )}
    </ScrollView>
  );
};
export default ScrollList;

export { ScrollListProps }
