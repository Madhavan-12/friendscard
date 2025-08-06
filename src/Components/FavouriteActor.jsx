function Favouriteactor(props){
    const actor = [
  "Ajith Kumar", "Arya",
  "Bharath", "Bhagyaraj",
  "Chiyaan Vikram", "Chandran",
  "Dhanush", "Delhi Ganesh",
  "Elango Kumaravel", "Erode Mahesh",
  "Faisal", "Fathima Babu",
  "Goundamani", "GV Prakash",
  "Harris Jayaraj", "Hari",
  "Ilayaraaja", "Irfan",
  "Jayam Ravi", "Jiiva",
  "Kamal Haasan", "Karthi",
  "Lawrence Raghavendra", "Livingston",
  "Madhavan", "Murali",
  "Nassar", "Napoleon",
  "Oviya", "Om Prakash Rao",
  "Parthiban", "Prakash Raj",
  "Qureshi", "Queen B",
  "Rajinikanth", "Raghava Lawrence",
  "Sivakarthikeyan", "Sathyaraj",
  "T. Rajendar", "T. S. Balaiah",
  "Udhayanidhi Stalin", "Urvashi",
  "Vijay", "Vikram",
  "Washington", "White Babu",
  "Xavier Britto", "X. Jayapal",
  "Yogi Babu", "Yuvan Shankar Raja",
  "Zakeer Hussain", "Zubin Garg"
];
;
    const firstletter=actor.filter(first=>(
        props.letter.toUpperCase()=== first[0].toUpperCase()
    ))
    return(
        <div>
            <h2>Favourite Actors With Firstletter</h2>
            <ul>
                {(firstletter.map((name,index)=>{
                     return <li key={index}><strong>Favourite hero from the letter is: </strong>{name}</li>  
}))}
                
            </ul>
        </div>
    )

    
}
export default Favouriteactor;