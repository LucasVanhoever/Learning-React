import { useState } from "react";

interface Props 
{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: Props)
{
 

    //this is known as a hook in react
    const[selectedIndex, setSelectedIndex] = useState(-1);
  


    const getMessage = () => 
    {
        return (items.length === 0 && <p>Narp</p>)
    }


    return (
        //empty angle tags means Fragment from react, better than using a div
        <>
            <h1>{heading}</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item,index)=>
                    <li 
                        className={selectedIndex === index 
                            ? 'list-group-item active' 
                            : 'list-group-item'}
                        key={item} 
                        onClick={() => {
                            setSelectedIndex(index); 
                            onSelectItem(item);
                        }}
                        >{item}
                    </li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;