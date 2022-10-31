import React from 'react';
import './Main-screen.scss';
import {Button} from "../ui-kit/Button/Button";

const MainScreen = ({ title, text, btnText, btnColor }) => {
    return (
        <div className="main-screen">
            <div className="container">
                <div className="main-screen__inner">
                    <h1 className="main-screen__title">{ title }</h1>
                    <p className="main-screen__text">{ text }</p>
                    <Button label={ btnText } color={ btnColor } />
                </div>
            </div>
        </div>
    );
}

export default MainScreen;