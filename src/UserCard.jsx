import PropTypes from 'prop-types'

const userData = [
  {
    name: "Maddy",
    city: "Chennai",
    description: "MERN Stack Developer",
    skills: [
        "JavaScript",
        "React.js",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful APIs",
        "Git & GitHub"
    ],
    online: false,
    profile: "images/mypic3.jpg",
},

  {
    name: "Surya",
    city: "Sivagangai",
    description: "Digital Marketer",
    skills: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Content Marketing",
        "Social Media Management",
        "Email Marketing",      
    ],
    online: true,
    profile: "images/surya1.jpeg",
},

  {
    name: "Ajay",
    city: "Bangalore",
    description: "Data Analyst",
    skills: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "Data Cleaning", "Excel"],
    online: false,
    profile: "images/ajay2.jpeg",
  },
  {
    name: "Dinesh",
    city: "Gujarat",
    description: "UPSC Aspirant",
    skills: ["Current Affairs", "Indian Polity", "History", "Geography", "Economics", "Essay Writing"],
    online: true,
    profile: "images/paagal.jpeg",
  },
  {
    name: "Navin Kumar",
    city: "Coimbatore",
    description: "Human Resource",
    skills: ["Recruitment", "Employee Relations", "HR Policies", "Payroll Management", "Training & Development"],
    online: true,
    profile: "images/Naveen.jpg",
  },
  {
    name: "Hari prasath",
    city: "Nagaland",
    description: "M.Tech in Computer Science",
    skills: ["Data Structures", "Algorithms", "Machine Learning", "Cloud Computing", "Database Management", "Software Development"],
    online: false,
    profile: "images/pappu.jpeg",
},
];

    


function User(props){
    return(
        <div className="card-container">
           <span className={props.online ? "pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
           <img src={props.profile} className="img" alt="user"/>
           <h3>{props.name}</h3>
           <h3>{props.city}</h3>
           <p>{props.description}</p>
           <div className="buttons">
              <button className="primary">Message</button>
              <button className="primary outline">Following</button>
           </div>
           <div className="skills ">
              <h6>Skills</h6>
              <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
              </ul>
           </div>
       </div>

    );
}

export const UserCard =()=>{
    return  <>
    {
        userData.map((user,index)=>(
            <User key={index} 
            name={user.name} 
            city={user.city}
            description={user.description}
            online={user.online}
            profile={user.profile}
            skills={user.skills}
            />
        ))
    }
    </>;
    
    };

    {/*<User name="Maddy" city="Chennai" 
    description="Front-end developer" skills={["HTML","CSS","Javascript",
        "React","Sql","Node","Mongodb"]}
        online={false} profile="images/mypic3.jpg"/>;*/}

    User.propTypes={
        name:PropTypes.string.isRequired,
        city:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        skills:PropTypes.arrayOf(PropTypes.string).isRequired,
        online:PropTypes.bool.isRequired,  
        profile:PropTypes.string.isRequired,
    };