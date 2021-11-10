import MyList from "./MyList"
import {useState} from "react"

const MyContainer = () => {
    const [items, setItems] = useState([
          {id: "1", text: "This is a list item", clicked: false},
          {id: "2", text: "Also this", clicked: false}
    ]);
    const [text, setText] = useState('');

    const updateItem = (id) => {
        let itemList = [...items];
        itemList.forEach((listItem, index) => {
            if(listItem.id === id) {
                let item = listItem;
                item.clicked = item.clicked ? false : true;
                itemList[index] = item;
                setItems(itemList);
                console.log(items);
                return;
            } 
        });
    }

    const onsubmit = (e) => {
        e.preventDefault();

        console.log("working :)")

        const id = Math.floor(Math.random() * 1000000 + 1000)
        const newListItem = {id, text};

        setItems([...items, newListItem]);
        setText('');
    }

    return (
        <div>
            <MyList
                updateItem={updateItem}
                header="Really epic list"
                items={items}
            />
            <form onSubmit={onsubmit}>
                <textarea id="list-input" name="list-input" placeholder="Input item here" onChange={(e) => setText(e.target.value)} value={text}/>
                <button className="btn" type="submit">submit list item</button>
            </form>
        </div>
    )
}

export default MyContainer



