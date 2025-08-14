 
import PropTypes from "prop-types"
export const Oneofsample = (props) => {
    const {color}=props;
  return (
    <div style={{background:color,padding:"20px",color:"white"}}>
        <p>This componeny has a background color of {color}</p>
    </div>
  )
};

Oneofsample.propType={
    color:PropTypes.oneOf(["red","green","blue"]).isRequired,
}; 
