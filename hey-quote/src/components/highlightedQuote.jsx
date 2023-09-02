import {Link} from "react-router-dom"

const HighlightedQuote = ({ author, text , time }) => {
    const Date = Array(time).toLocaleString().split(",")[0].trim()
    const Time = Array(time).toLocaleString().split(",")[1].trim()
    

    return (
        <>
            <div className = "bg-slate-700 text-white w-4/12 rounded-lg p-5 px-10 m-2 flex flex-wrap justify-center items-center relative">
                <Link to = "/quotes" className = "text-2xl absolute top-3 left-3">
                    <i className = "bx bx-left-arrow-alt"></i>
                </Link>

                <div className = "w-full text-center">
                    <h1 className = "capitalize text-3xl">quote details :</h1>
                </div>
                
                
                <div className = "flex flex-wrap bg-ye llow-300 p-2 mt-5">
                    <div className = "w-full m-2 py-1">
                        <p className = "txt-1 text-lg">
                            <i className = "bx bx-pencil"></i> : {author}
                        </p>
                    </div>

                    <div className = " w-full m-2 py-1">
                        <p className = "text-lg">
                            <i className='bx bx-align-middle'></i> : {text}
                        </p>
                    </div>

                    <div className = " w-full m-2 py-1 flex flex-wrap justify-start">
                        <p className = "mr-5">
                            <i className = "bx bx-time-five pr-1"></i>
                            : {Time}
                        </p>

                        <p className = "ml-5">
                            <i className = "bx bx-calendar-alt pr-1"></i>
                            : {Date}
                        </p>
                    </div>
                </div>


            </div>
        </>
    );
};

export default HighlightedQuote;
