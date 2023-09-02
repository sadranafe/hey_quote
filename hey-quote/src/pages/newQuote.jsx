import React from 'react';
import QuoteForm from '../components/quoteForm';

const NewQuote = () => {
    return (
        <>
            <div className = "flex flex-wrap justify-center items-center content-center h-96 mt-10">
                <QuoteForm/>
            </div>
        </>
    );
};

export default NewQuote;