import QuoteItem from "../components/quoteItem";

const AllQuote = ({dummy_data}) => {
    return (
        <>
            <div className = "flex flex-wrap mt-10 justify-center items-center content-center">
                {
                    dummy_data.map( (quote , index) =>
                        <QuoteItem key = {index} id = {index} author = {quote.author} text = {quote.text}/>   
                    )
                }
            </div>
        </>
    );
};

export default AllQuote;