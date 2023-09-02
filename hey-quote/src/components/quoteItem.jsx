import { Link } from "react-router-dom"

const QuoteItem = ({text , author , id}) => {
    return (
        <>
            <div className = "bg-4 m-2 p-3 rounded-lg w-6/12 flex flex-wrap justify-between items-center">
                <div className = "w-8/12">
                    <div>
                        <h1 className = "text-xl">{text}</h1>
                    </div>

                    <div>
                        <p>{author}</p>
                    </div>
                </div>

                <Link to = {`/quotes/${id}`} className = "capitalize rounded-lg p-2 border border-stone-400 hover:bg-slate-700 hover:border-slate-700 hover:text-white transition-all">view fullScreen</Link>
            </div>
        </>
    );
};

export default QuoteItem;