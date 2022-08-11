import React, { useState } from 'react';
import axios from 'axios';

export default function TestPage() {
  const [data, setData] = useState({});
  const [token, setToken] = useState(false);
  const handleInput = e => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const login = () => {
    // 서버랑 통신하는 코드
    axios
      .post('http://localhost:8000/api/token', data)
      // 성공하면 setToken
      .then(res => setToken(res.data.token))
      // 실패하면 alert
      .catch(err => alert('에러났습니다!'));
  };
  return (
    <div>
      <input type="text" name="email" onChange={handleInput} />
      <input type="password" name="password" onChange={handleInput} />
      <button type="button" onClick={login}>
        로그인
      </button>
      {token && <div>{token}</div>}
    </div>
  );
}
