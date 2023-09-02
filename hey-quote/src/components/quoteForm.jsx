import { useState } from "react";
import {useHistory} from "react-router-dom"

const QuoteForm = ({onGetData}) => {
    const history = useHistory()

    const [enteredInputValue , setEnteredInputValue] = useState("")
    const [enteredTextAreaValue , setEnteredTextAreaValue] = useState("")
    const formIsValid = enteredInputValue.trim() !== "" && enteredTextAreaValue.trim() !== "";

    const inputChangeHandler = ev => {
        setEnteredInputValue(ev.target.value)
    }

    const textAreaChangeHandler = ev => {
        setEnteredTextAreaValue(ev.target.value)
    }

    const formHandler = ev => {
        ev.preventDefault();
        history.push("/quotes")

        const enteredData = {
            author : enteredInputValue,
            text : enteredTextAreaValue,
            time : new Date()
        }
        onGetData(enteredData)
    }

    return (
        <>
            <form action = "#" onSubmit = {formHandler} className = 'bg-4 p-1 py-10 rounded-xl flex flex-wrap justify-center items-center w-5/12'>
                <div className = 'w-full text-center mb-5'>
                    <h1 className = 'capitalize text-2xl'>add new quote</h1>
                </div>

                <div className = 'text-center w-full'>
                    <label htmlFor = "author">Author</label>
                    <input type = "text" id = "author" ref = {inputRef} onChange = {inputChangeHandler} className = 'rounded-lg m-2 p-3 w-6/12 px-5 outline-none text-sm' autoComplete = 'off'/>
                </div>

                <div className = 'w-full text-center flex flex-wrap justify-center items-start'>
                    <label htmlFor = "author">Text</label>
                    <textarea id = "text" rows = "7" cols = "24" ref = {textAreaRef} onChange = {textAreaChangeHandler} className = 'outline-none resize-none w-6/12 ml-5 p-4 text-sm rounded-lg'></textarea>
                </div>

                <div className = 'text-center'>
                    <button type = 'submit' disabled = {!formIsValid} className = 'capitalize disabled:bg-slate-500 disabled:cursor-not-allowed outline-none p-2 m-2 rounded-lg bg-slate-700 hover:bg-slate-800 transition-all text-white'>add quote</button>
                </div>
            </form>     
        </>
    );
};

export default QuoteForm;