function CardForm ({addCity}) {
    const handleClick = () => {
        const city ={
            id:1,
            title: "Sidney",
            imgUrl: "https://images.unsplash.com/photo-1447953696461-df240a5320a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: false
        }
        addCity(city)
    }
    return(
<div className="flex flex-col gap-3 w-80 mb-10 ">
    <input type="text" className="bg-sky-500"></input>
    <input type="text" className="bg-sky-500"></input>
    <input type="text" className="bg-sky-500"></input>
    <button onClick={handleClick}>Agg Card</button>

</div>
    )
}
export default CardForm