// import * as redux from 'redux';
import * as redux from './super-mini-redux'; // 使用 super-mini-redux 达到同样效果

// step1: 初始化 reducer 函数
const initialState = {
  value: 0
};
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

// step2: 初始化 store
const store = redux.createStore(counterReducer);

// step3: store 订阅 UI render 更新
const valueEl = document.getElementById("value");
function render() {
  const state = store.getState();
  valueEl.innerHTML = state.value.toString();
}
store.subscribe(render);

// step4: 绑定事件, dispatching actions
document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});
document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch({ type: "counter/decremented" });
});

render();
