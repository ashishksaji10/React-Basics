import React from "react"
import ReactDOM from 'react-dom/client'

// React Components



const Title = ({props}) => (
    <h1 className="Head">
        {props}
    </h1>
);
    


const Heading = () => {
    return (<div>
        <Title props='Hello'/>
        <h1>Hello Ashish</h1>
    </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'))

const heading = <h1 id="hello" className="Head">Hello Ashish</h1>

root.render(<Heading />)