function MyButton() {
    return (
        <button>Click me</button>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
        </div>
    )
}
