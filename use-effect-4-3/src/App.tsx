import {useState, useEffect} from 'react'

function App() {
    const [count, setCount] = useState(0);
    /**
     *  <p id="effectHook></p>から取得したテキストをコンソールに出力する副作用。
     *  今回の場合、Appコンポーネントが再度レンダーされる度に実行される。
     *  副作用はコンポーネントのレンダー後に実行されるため、Appコンポーネントのレンダーで生成された<p id="effectHook></p>も操作できる。
     *  コンポーネントはstateが更新される度にレンダーされるため、Appコンポーネントはcountが更新される度に再レンダーされる。
     *  そのため、ボタンをクリックするたびにAppコンポーネントは再レンダーされ、この副作用も実行される。
     */
    useEffect(() => {
        console.log(document.getElementById("effectHook")?.innerText);
    })

    return (
        <>
            <div>
                <p id="effectHook">You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>click</button>
            </div>
        </>
    )
}

export default App
