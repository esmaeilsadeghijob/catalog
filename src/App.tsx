import React, { useEffect, useState } from 'react';
import './App.css';
import { InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const App: React.FC = () => {
    const text = "د کتر اسماعیل صادقی هفشجانی";
    const [displayedText, setDisplayedText] = useState<string>("");
    const [showPipe, setShowPipe] = useState<boolean>(true);
    const [showSocialLinks, setShowSocialLinks] = useState<boolean>(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                setShowPipe(false);
                setTimeout(() => setShowSocialLinks(true), 1000); // فاصله زمانی برای نمایش لینک‌ها
            }
        }, 120);
        return () => clearInterval(interval);
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

                {/* افزودن فاصله بین نام و شبکه‌های اجتماعی */}
                {showSocialLinks && (
                    <div className="spacer"></div>
                )}

                {showSocialLinks && (
                    <div className="social-links">
                        <div className="instagram-container">
                            <InstagramOutlined className="instagram-icon" />
                            <a
                                href="https://www.instagram.com/dr.esmail.sadeghi.h/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                dr.esmail.sadeghi.h
                            </a>
                        </div>
                        <div className="linkedin-container">
                            <LinkedinOutlined className="linkedin-icon" />
                            <a
                                href="https://www.linkedin.com/in/dr-esmaeil-sadeghi-hafshejani/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                dr-esmaeil-sadeghi-hafshejani
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default App;
