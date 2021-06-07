declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'rn'
      | 'tt'
      | 'quickapp'
      | 'qq'
      | 'jd';
  }
}

declare interface objectType {
  [keys: string]: any
}

declare interface ISave<T> {
  payload: Partial<T>;
}
 
interface IRely {
  [keys: string]: any;
}

declare interface IModel<S extends IRely, R extends IRely, E extends IRely> {
  namespace: string;
  state: S;
  reducers: R;
  effects: E;
}
