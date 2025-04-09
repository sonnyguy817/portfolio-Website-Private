import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 定義一個函數組件
const Counter = () => {
  // 使用 useState Hook 管理狀態
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>計數器: {count}</h1>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>減少</button>
    </div>
  );
};

// 渲染組件到頁面
ReactDOM.render(<Counter />, document.getElementById('root'));