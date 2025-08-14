import '../css/App.css';

export const Header=()=>{
    let customCSS="Code";
    const isLoggedIn=false;
    const greeting =isLoggedIn ?<p>Welcome back!</p>:<p>Please log in

    </p>;
    const items=["Item1","Item2","Item3"];
           {/*jsx Fragments:*/}
    return(
        
        <>
        <div>
        <h1 className="bannerText">Tutor joes</h1>
        <p className="slogan">Learn more be Smart</p>
        {/*javascript Expresion in jsx*/}
        <p 
        className={customCSS}
        style={{fontSize:"20px",
            fontStyle:"italic"}}
            >
            25+45={25+45}
            </p>
        {/*jsx with Conditional Rendering:*/}
        {greeting}
        {/*jsx with Lists:*/}
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
        </>
    );
};

