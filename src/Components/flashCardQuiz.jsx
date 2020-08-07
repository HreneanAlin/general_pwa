import React, {useEffect, useRef, useState} from 'react';
import FlashCardList from "./FlashCardList";
import axios from 'axios'
import Error from "./Error";
import Loader from "./Loader";

function FlashCardQuiz(props) {
    const [flashCards, setFlashCards] = useState([])
    const [categories,setCategories] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const categoryEl = useRef()
    const amountEl = useRef()
    let content
    useEffect(()=>{
        axios
            .get("https://opentdb.com/api_category.php")
            .then(res => {
                setCategories(res.data.trivia_categories)
                setLoading(false)
            })
            .catch(()=>setError(true))

    },[])

    useEffect(() => {


    }, [])

    function decodeString(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }
function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
    axios.get('https://opentdb.com/api.php',{
        params:{
            amount:amountEl.current.value,
            category:categoryEl.current.value
        }
    })
        .then(res => {
            setFlashCards(res.data.results.map((questionItem, index) => {
                setLoading(false)
                const answer = questionItem.correct_answer
                const options = [...questionItem.incorrect_answers, answer].map(option => decodeString(option))
                return {
                    id: `${index}-${Date.now()}`,
                    question: decodeString(questionItem.question),
                    answer: decodeString(answer),
                    options: options.sort(() => Math.random() - .5)

                }

            }))

        }).catch(()=>setError(true))

}

if(error) content = <Error/>

if(loading) content = <Loader/>

if(!error && !loading) content = (
    <main className="main-quiz">
        <h1>Quiz</h1>
        <form className="header" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" ref={categoryEl}>
                    {categories.map((category, index)=>
                        <option key={index} value={category.id}>{category.name}</option> )}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="amount">NumberOfQuestions</label>
                <input id="amount" type="number" min="1" step="1" defaultValue="10" ref={amountEl}/>
            </div>
            <div className="form-group">
                <button className="btn">Generate</button>
            </div>

        </form>
        <div className="quiz-container">
            <FlashCardList flashCards={flashCards}/>
        </div>
    </main>

)

    return content
}


export default FlashCardQuiz;