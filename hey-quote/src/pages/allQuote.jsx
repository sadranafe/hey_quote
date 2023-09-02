import QuoteItem from "../components/quoteItem";
import {Link} from "react-router-dom"

const AllQuote = ({dummy_data , onIsEmpty}) => {
    return (
        <>
            <div className = "flex flex-wrap mt-10 justify-center items-center content-center">
                {
                    onIsEmpty ?
                    <div className = "flex items-center">
                        <p className = "text-xl">No quote added❗- </p>
                        
                        <Link to = "/new-quote" className = "text-blue-400 transition-all hover:text-blue-600 ml-2 pr-2 py-2">click here to add a quote</Link>
                    </div> :
                    dummy_data.map( (quote , index) =>
                        <QuoteItem key = {index} id = {index} author = {quote.author} text = {quote.text}/>   
                    )
                }
            </div>
        </>
    );
};

export default AllQuote;