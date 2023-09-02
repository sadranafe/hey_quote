import { useRef } from "react";

const QuoteForm = () => {
    const inputRef = useRef();
    const textAreaRef = useRef();

    const formHandler = ev => {
        ev.preventDefault();
        const enteredInputValue = inputRef.current.value
        const enteredTextAreaValue = textAreaRef.current.value

        const enteredData = {
            author : enteredInputValue,
            text : enteredTextAreaValue,
            time : new Date()
        }

    }

    return (
        <>
            <form action = "#" onSubmit = {formHandler} className = 'bg-4 p-1 py-10 rounded-xl flex flex-wrap justify-center items-center w-5/12'>
                <div className = 'w-full text-center mb-5'>
                    <h1 className = 'capitalize text-2xl'>add new quote</h1>
                </div>

                <div className = 'text-center w-full'>
                    <label htmlFor = "author">Author</label>
                    <input type = "text" id = "author" ref = {inputRef} className = 'rounded-lg m-2 p-3 w-6/12 px-5 outline-none text-sm' autoComplete = 'off'/>
                </div>

                <div className = 'w-full text-center flex flex-wrap justify-center items-start'>
                    <label htmlFor = "author">Text</label>
                    <textarea id = "text" rows = "7" cols = "24" ref = {textAreaRef} className = 'outline-none resize-none w-6/12 ml-5 p-4 text-sm rounded-lg'></textarea>
                </div>

                <div className = 'text-center'>
                    <button type = 'submit' className = 'capitalize outline-none p-2 m-2 rounded-lg bg-slate-700 hover:bg-slate-800 transition-all text-white'>add quote</button>
                </div>
            </form>     
        </>
    );
};

export default QuoteForm;