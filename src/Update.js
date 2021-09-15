import "./Update.css";
import TextField from "@material-ui/core/TextField";


const Update = () => {
    return ( 
        <div className="update">
         <form >
            <h2>UPDATE NEW PROGRAMMES </h2>
            <div className="top__input">
            <TextField 
            id="outlined-basic"
            label="Programme Type"
            variant="outlined"
          />
          <TextField 
            id="outlined-basic"
            label="Programme Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Department Name"
            variant="outlined"
          />
          </div>
          <div className = "bottom_down">
            <p>Doc Name</p>
            <label>Submit to: 
            <select className= "options" >
                <option value="">
                    School
                </option>
                <option value="">
                    College
                </option>
                <option value="">
                    QAB
                </option>
                <option value="">
                    Academic Board
                </option>
            </select> 
            </label>
          </div>
          <button >Submit</button> 
                </form>


                
            

        </div>
     );
}
 
export default Update;