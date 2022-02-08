import React from 'react';

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg)'
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un Nuevo dia
                </p>
                <p className='journal__entry-content'>
                    kjasndlkjnaslkjndlkahljksdakhjlfdsaklhjfdsahkjldfsalk
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
