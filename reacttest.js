import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// �w�q�@�Ө�Ʋե�
const Counter = () => {
  // �ϥ� useState Hook �޲z���A
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>�p�ƾ�: {count}</h1>
      <button onClick={() => setCount(count + 1)}>�W�[</button>
      <button onClick={() => setCount(count - 1)}>���</button>
    </div>
  );
};

// ��V�ե�쭶��
ReactDOM.render(<Counter />, document.getElementById('root'));