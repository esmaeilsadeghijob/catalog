import React, {useEffect, useState} from 'react';
import './App.css';

const App: React.FC = () => {
    const text = "د کتر اسماعیل صادقی هفشجانی"; // متن اصلی
    const [displayedText, setDisplayedText] = useState<string>(""); // مقدار اولیه یک رشته خالی
    const [showPipe, setShowPipe] = useState<boolean>(true); // کنترل نمایش خط پایپ

    useEffect(() => {
        let index = 0; // مقدار اولیه اندیس
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index)); // افزودن کاراکتر معتبر
                index++;
            } else {
                clearInterval(interval); // توقف انیمیشن بعد از کامل شدن متن
                setShowPipe(false); // حذف خط پایپ
            }
        }, 120); // سرعت تایپ
        return () => clearInterval(interval); // پاکسازی تایمر در خروجی
    }, [text]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    {showPipe && <span className="pipe">|</span>}
                    <span className="text">
                         <a href="https://www.esmaeilsadeghi.ir/"
                               target="_blank"
                               rel="noopener noreferrer">
                        {displayedText}
                        </a>
                        </span>
                </div>
            </header>
        </div>
    );
};

export default App;
