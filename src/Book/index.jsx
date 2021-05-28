import React, { useState } from 'react';
import './style.css';

const Book = ({ id, title, author, year, cover, read, handleUpdate }) => {
    /* const [precteno, setPrecteno] = useState(read);
    const handleClick = () => {
        setPrecteno(!precteno); */

    const handleClick = () => {
        handleUpdate(id);
    };
    return (
        <>
            <div className="book">
                <img
                    className="book-cover"
                    src={`/assets/book-covers/${cover}`}
                    alt={title}
                />

                <div className="book-details">
                    <h2 className="book-title">{title}</h2>
                    <p className="book-meta">
                        {author}, {year}
                    </p>

                    <button onClick={handleClick} className="book-read">
                        {read ? 'přečteno' : 'nepřečteno'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Book;
