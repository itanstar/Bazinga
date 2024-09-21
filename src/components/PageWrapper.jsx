// src/components/PageWrapper.jsx
import React, { useEffect, useState } from 'react';

const PageWrapper = ({ children }) => {
  const [transitionClass, setTransitionClass] = useState('enter');

  useEffect(() => {
    setTransitionClass('enter'); // 페이지가 로드될 때 'enter' 클래스 설정
    return () => {
      setTransitionClass('exit'); // 페이지가 언마운트될 때 'exit' 클래스 설정
    };
  }, []);

  return (
    <div className={`page-transition ${transitionClass}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
