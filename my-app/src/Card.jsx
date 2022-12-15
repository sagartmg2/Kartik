import React, { Fragment } from 'react';


let obj = {}
let name = "john doe "
let color = "teal"
let card_style = {
    color: color,
    // backgroundColor: "red",
    width: "200px",
    padding: "30px",
    border: "1px solid black",
    margin: "10px"
}
// const Card = (props) => {
const Card = ({ name, age }) => {

    /* 
        props = {name:,key: }
     */
    // console.log({ props });
    return (
        <div className="card" style={card_style} >
            {/* // <div>
                    {/* // <Fragment> */}
            {/* </> 
                    faramgement */}
            {/* <h1>{props.name ? props.name : "no name "} ({props.age})</h1> */}

            <h1>{name || "no name "}

                {/* {
                    props.age ?
                        (props.age)
                        :
                        null
                } */}
                {
                    age
                    &&
                    (age)
                }
            </h1>

            <p>  {1 + 1}Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ratione neque soluta iure similique, nam labore rerum mollitia deserunt, debitis placeat tempora quo quas dignissimos assumenda unde totam repellendus enim.</p>
            {/* <div className="card" style={card_style} >
                <h1>{name}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ratione neque soluta iure similique, nam labore rerum mollitia deserunt, debitis placeat tempora quo quas dignissimos assumenda unde totam repellendus enim.</p>
            </div> */}

            {/* </div> */}
        </div>

    );
}

/* 
    Card()
    <Card/>
*/

export default Card;
