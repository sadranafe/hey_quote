import React from 'react';
import QuoteForm from '../components/quoteForm';

const NewQuote = ({onDUMMY_DATA}) => {
    const getData = data => {
        onDUMMY_DATA(data)
    }

    return (
        <>
            <div className = "flex flex-wrap justify-center items-center content-center h-96 mt-10">
                <QuoteForm onGetData = {getData}/>
            </div>
        </>
    );
};

export default NewQuote;