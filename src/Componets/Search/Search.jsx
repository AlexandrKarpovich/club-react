import React from 'react';
import './Search.scss';
import Input from "../Input/Input";


const Search = () => {
    return (
        <form className="search">
            {/*<input className={styles.search__input} type="text" placeholder="Поиск" />*/}
            <Input clas="search__input" type="text" name="search" placeholder="Поиск" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4514 18.929C15.8697 18.929 19.4514 15.3472 19.4514 10.929C19.4514 6.51068 15.8697 2.92896 11.4514 2.92896C7.03314 2.92896 3.45142 6.51068 3.45142 10.929C3.45142 15.3472 7.03314 18.929 11.4514 18.929Z" stroke="#517AA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.4513 20.929L17.1013 16.579" stroke="#517AA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </form>
    );
}

Search.propTypes = {};

export default Search;