import {useParams} from "react-router-dom"
import HighlightedQuote from "../components/highlightedQuote";

const QuoteDetail = ({dummy_data}) => {
    const params = useParams()

    const quote = dummy_data[params.quoteId]

    if(!quote){
        return(
            <div className = "text-center mt-10">
                <p className = "capitalize">no quote found.</p>
            </div>
        )
    }

    return (
        <>
            <div className = "w-full flex flex-wrap justify-center items-center content-center h-96 mt-5">
                <HighlightedQuote author = {quote.author} text = {quote.text} time = {quote.time}/>
            </div>
        </>
    );
};

export default QuoteDetail;