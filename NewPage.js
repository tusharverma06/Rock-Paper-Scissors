const Div = document.getElementById("react")

function Header(){
    return(
        <nav>
        <h1>Hello World</h1>
        <fieldset>
        <ul>
            <li>Hello</li>
            <li>Guys</li>
        </ul>
        </fieldset>
</nav>

    )
}
const root = ReactDOM.createRoot(Div)

root.render(Header() )