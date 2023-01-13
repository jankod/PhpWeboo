import './App.css';
import {createElement} from "react";
import { Button } from 'react-bootstrap';


// https://www.pluralsight.com/guides/how-to-render-a-component-dynamically-based-on-a-json-config
// const MyButton = (props) => {
//     //console.log("MyButton props", props)
//     return (
//         // <button id={props.id} className={props.className} style={props.style}
//         //         onClick={props.onClick ? (e) => getFunctionByName(props.onClick)(e): null}>
//         //     {props.children}
//         // </button>
//         <Button {...props}
//          // onClick={props.onClick ? (e) => getFunctionByName(props.onClick)(e): null}
//         >
//             {props.children}
//         </Button>
//     )
// }


function Span(props) {
    return (
        <span {...props}>
            {props.children}
        </span>
    )
}

const componentNames = {
    button: Button,
    span: Span,
}

const functionNames = {
    someEvent: handleClickEvent
}


function getFunctionByName(funcName) {
    return functionNames[funcName];
}
const config = {
    component: 'button',
    variant: "success",
    id: 'b11',
    key: 'b11',
    // className: 'button b222',
    onClick: getFunctionByName('someEvent'),
    children: [{
        component: 'span',
        key: '23324',
        children: 'tekst od span',
        className: 'spanas',
    }]
}

function handleClickEvent(prop) {
    console.log("Events", prop);
}


const config2 = {
    component: 'span',
    id: 'b11',
    children: [{
        component: 'span',
        id: '324324',
        children: 'tekstod span'
    }]
}


function App() {
    return (
        <div className="App">
            <p>
                komponente
            </p>
            {/*<MyButton id='23' children={'pero'}></MyButton>*/}
            {renderComponent(config)}
        </div>
    );
}

const renderComponent = config => {
    if (typeof componentNames[config.component] !== 'undefined') {
        return createElement(
            componentNames[config.component],
            config,
            config.children &&
            (typeof config.children === 'string'
                ? config.children
                : config.children.map(c => renderComponent(c))),
        )
    }
}

export default App;
