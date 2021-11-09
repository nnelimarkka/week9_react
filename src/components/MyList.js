const MyList = (props) => {
    let itemArray = Array.from(props.items);
    return (
        <div>
          <h1>{props.header}</h1>
          <ol>
              {itemArray.map((item) => (
                <li className={item.clicked ? 'clicked' :''} key={item.id} onClick={() => props.updateItem(item.id)}>{item.text}</li>
            ))}</ol>  
        </div>
    )
}

export default MyList
