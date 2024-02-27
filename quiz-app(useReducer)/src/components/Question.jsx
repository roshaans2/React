import Options from "./Options"

const Question = ({ question }) => {
    return (
        <div>
            <h4>{question.question}</h4>
            <div className="options">
                {question.options.map((option)=><Options option={option} key={option}/>)}
            </div>
        </div>
    )
}

export default Question