# super-mini-redux
超精简 redux 实现，不到20行代码。以下是源码：
```js
export const createStore = (reducer) => {
  let state
  let listeners = []
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
    return action
  }
  const subscribe = (listener) => {
    listeners.push(listener)
  }
  dispatch({ type: `SUPER_MINI_REDUX_INIT_ACTION_${Math.random()}` })
  return {
    getState: () => state,
    dispatch,
    subscribe,
  }
}
```

以上代码可以实现 redux [官方基础教程](https://redux.js.org/tutorials/fundamentals/part-1-overview) 最简单的 demo：
- [https://codesandbox.io/s/redux-fundamentals-core-example-lr7k1](https://codesandbox.io/s/redux-fundamentals-core-example-lr7k1)

仅供初学者学习参考，快速理解，其实就是个发布-订阅模式。体验 super-mini-redux 的线上 demo：
- [https://codesandbox.io/s/heuristic-wilson-xgqzsw](https://codesandbox.io/s/heuristic-wilson-xgqzsw?file=/index.html)


# dev
```shell
npm i     # install node modules
npm start # server running at http://localhost:1234
```
