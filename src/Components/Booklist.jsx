function Booklist({toprated}){
    const books = [
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997, rating: 4.5 },
  { title: "Atomic Habits", author: "James Clear", year: 2018, rating: 4.9 },
  { title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, rating: 3.8 }
];
const filteredbook = books.filter(book=>{
    return book.rating>toprated
})
   
    return(
      <div>
          <h2>These books ratings (above {toprated})</h2>
        <ul>
          { filteredbook.map((book,index)=>(
            <li key={index}><strong> {book.title}</strong>is written by {book.author} in {book.year}</li>

           ))}
           
        
            
        </ul>
      </div>
    )
}
function Favouritefruits(props){
    const fruits = ['Mango', 'Banana', 'Apple', 'Orange', 'Pineapple'];
    
    return(
        <div>
            <p>My favourite Fruits are below</p>
            <ul>
                {fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
            </ul>
        </div>
    )

}

export default Booklist;
export {Favouritefruits};