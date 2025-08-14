
export const Myfavourite=()=>{
    const like="Peace";
    const love="Amma";
    const passion="Mern-stack-Developer";
    const Leader="Methagu"
    const day=new Date().toDateString();
    return(
        <div className="favclass">
            <h1>My Favourites</h1>
            <p>Iam Maddy,i love my {love}.My passion is<strong>{passion}</strong></p>
            <h2>Fav Leader</h2>
            <p>My fav leader IS {Leader}</p>
            <p>best treasure is {like}</p>
            <p>today is {day}</p>
        </div>
    )
}
