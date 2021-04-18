import { useGlobalIconFont } from './components/iconfont/helper';

export default {
  pages: ['pages/home/index'],
  subPackages: [
    {
      root: 'componentsExample/',
      pages: [
        'iconFont/index',
        'scroll-list/index',
        'tab-bar/index',
        'title-bar/index',
        'page-container/index'
      ],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '标题',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  usingComponents: Object.assign(useGlobalIconFont()),
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序车辆位置定位',
    },
  },
};
