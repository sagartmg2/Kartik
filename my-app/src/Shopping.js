import React, { useState, useEffect } from 'react';

const Shopping = () => {

    console.log("re-render ");
    const [items, setItem] = useState([])
    const [item_name, setItemName] = useState("")
    const [quanity, setQauntity] = useState(1)

    // if (localStorage.getItem("items")) {
    //     let arr = JSON.parse(localStorage.getItem("items"))

    //     console.log({ arr });
    //     setItem(arr)
    // }

    // useEffect(() => {
    //     console.log("use-effect  --componentdidupdate ");
    //     // if (localStorage.getItem("items")) {
    //     //     let arr = JSON.parse(localStorage.getItem("items"))

    //     //     console.log({ arr });
    //     //     setItem(arr)
    //     // }
    // })

    useEffect(() => {
        console.log("use-effect  --componentdidupdate - items ");
        if (items.length > 0) {
            localStorage.setItem("items", JSON.stringify(items))
        }
    }, [items])

    useEffect(() => {
        console.log("use-effect  --component did mount ");
        if (localStorage.getItem("items")) {
            let arr = JSON.parse(localStorage.getItem("items"))

            console.log({ arr });
            setItem(arr)
        }
    }, [])




    /* 
        lifecycle method
            componenetDidMount - the very first initial rendering of our compoinnet 
            componentDidUpdate - on every subsequent change in state 

    */

    const handleSubmit = (e) => {
        e.preventDefault()

        // let temp = [...items, { name: item_name, quanity: quanity }]
        // setItem(temp)
        setItem([...items, { name: item_name, quanity: quanity }])
        // console.log({ items })
        // localStorage.setItem("items", JSON.stringify(temp))
        /* 
                get the value sof input fields 
        */

    }

    const changeItemName = (e) => {
        setItemName(e.target.value)
    }

    const changeQuantity = (e) => {
        setQauntity(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input value={item_name} onChange={changeItemName} />
                <input value={quanity} onChange={changeQuantity} />
                <button>create</button>
            </form>

            <ul>
                {
                    items.map(item => {
                        // return <li>{ JSON.stringify(item) }</li>
                        return <li>{item.name} ({item.quanity})</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Shopping;
