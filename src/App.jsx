// import { ChildComponent } from './Components/Childcomponent';
// import { Student } from './Components/Student';
import Book from "./Components/Book";
import Booklist, { Favouritefruits } from "./Components/Booklist";
import Favouriteactor from "./Components/FavouriteActor";
import { Myfavourite } from "./Components/Myfavourit";
import { Mymood } from "./Components/Mymood";
import Profile from "./Components/profile";
import Quote from "./Components/Quote";

// import { Oneofsample } from "./Components/Oneofsample";
// import { Arraysample } from "./Components/Arraysample";

function App() {
  // const items = [
  //   { id: 1, name: "Item 1" },
  //   { id: 2, name: "Item 2" },
  //   { id: 3, name: "Item 3" },
  // ];

  return (
    <div>
      <Favouriteactor letter="" />
      <Favouritefruits />
      <Booklist toprated={4} />
      <Profile name="Maddy" role="Mern-stack developer"/>
      <Quote quote="live let live" />
      <Book title="Cant hurt me" author="David goggins" year={2018} />
      
      {/*<Mymood />
      <Myfavourite />
       <Student name="Madhavan" age={21} ismarried={true} habbit="Explore World" favfood="Parotta" />
      <Student name="Surya" age={21} ismarried={false} habbit="Ride" favfood="Biriyani" />
      <Student />
      <Student name="Veera" favfood="Noodles" />
      <ChildComponent>
        <p>This is a paragraph 1</p>
        <p>This is a paragraph 2</p>
      </ChildComponent>
      <Arraysample items={items} />
      <Oneofsample color="orange" /> */}
    </div>
  );
}

export default App;
