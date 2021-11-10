const MyList = (props) => {
    let itemArray = Array.from(props.items);
    const mystyle = {
        textDecoration: "line-through"
      };
    return (
        <div>
          <h1>{props.header}</h1>
          <ol>
              {itemArray.map((item) => (
                <li style={item.clicked ? mystyle :{}} key={item.id} onClick={() => props.updateItem(item.id)}>{item.text}</li>
            ))}</ol>  
        </div>
    )
}

export default MyList
