import React, { useState } from 'react';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('es'); // 기본 언어 설정

  const translateText = async () => {
    const apiKey = 'YOUR_API_KEY'; // 발급받은 API 키를 입력하세요.
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: language,
      }),
    });

    const data = await response.json();
    setTranslatedText(data.data.translations[0].translatedText);
  };

  return (
    <div>
      <h1>번역기</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="번역할 텍스트를 입력하세요."
      />
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* 추가 언어 옵션 */}
      </select>
      <button onClick={translateText}>번역하기</button>
      <p>번역된 텍스트: {translatedText}</p>
    </div>
  );
};

export default Translator;
