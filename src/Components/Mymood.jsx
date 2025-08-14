 


export const Mymood= ()=>{
let name="Guru"
let age=21;
let mood="Happy"
let today=new Date().toDateString();
return(
   <div className="mycls">
     <h2>Welcome to my react world</h2>
     <p>
        Hey,i'm({name} and i'm feeling {mood} today )
     </p>
     <p>Today is:{today}</p>
   </div>
);
};

