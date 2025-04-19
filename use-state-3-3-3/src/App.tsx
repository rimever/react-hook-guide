import {useState} from 'react'

function App() {
    const [items, setItems] = useState([{name: "きのこ"}]);
    const addItem = () => {
        const newItem = {
            name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
        }
        setItems([...items, newItem]);
    };
    const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <>
            <button onClick={addItem}>「きのこ」か「たけのこ」を追加</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        <button onClick={() => deleteItem(index)}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
