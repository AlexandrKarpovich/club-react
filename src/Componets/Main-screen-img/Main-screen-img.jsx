import React from 'react';
import './Main-screen-img.scss';
import {Button} from "../ui-kit/Button/Button";
import Image from "../Image";

const MainScreenImg = ({ title, text, btnText, btnColor, picture }) => {
    return (
        <div className="main-screen-img">
            <div className="container">
                <div className="main-screen-img__inner">
                    <div className="main-screen-img__box">
                        <h1 className="main-screen-img__title">{ title }</h1>
                        <p className="main-screen-img__text">{ text }</p>
                        <Button label={ btnText } color={ btnColor } />
                    </div>
                    <Image icon={ picture } />
                </div>
            </div>
        </div>
    );
}

export default MainScreenImg;