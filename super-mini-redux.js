
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
  // 初始化 store 的时候，先执行一次内部 dispatch 来初始化当前 state，注意 type 必须唯一，不与外部用户定义的 type 重复
  dispatch({ type: `SUPER_MINI_REDUX_INIT_ACTION_${Math.random()}` })
  return {
    getState: () => state,
    dispatch,
    subscribe,
  }
}

