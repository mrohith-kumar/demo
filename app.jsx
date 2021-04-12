import React,{Component} from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname:" ",
      email:" ",
      
      
    };
    
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
        [event.target.name]:event.target.value,
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
    if(this.state.fname===" ")
    alert("fname must not be empty");
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
          <label>
              "Fname"
          <input type="text" name="fname" value={this.fname}></input>
          </label><br/>
          <label>
              "lname"
              <input type="text" name="lname" value={this.lname}></input>
              </label>
              <label>
              "email"
              <input type="text" name="lname" value={this.email}></input>
              </label><br/>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default App;

/*const App = () => {
    const [fullName,setfullName]=useState({
        fname:" ",
        lname:" ",
        email:" ",
        
    });
    
    const inputEvent=(event)=>{
        
        
        const value=event.target.value;
        const name=event.target.name;
        
        setfullName((prevalue)=>{
        if(name==="fname"){
            return{
                fname:value,
                lname:prevalue.lname,
                email:prevalue.email,
            };
        } else if(name==="lname"){
            return{
                fname:prevalue.fname,
                lname:value,
                email:prevalue.email,
            };
        }
        else if(name==="email"){
            return{
                fname:prevalue.fname,
                lname:prevalue.lname,
                email:value,
            };
        }
        
    });
};
 
    const onSubmits = (event) => {
        event.preventDefault();
        alert("form submitted");
    };
    return(
        <>
        <div className="main-div">
            <form onSubmit={onSubmits}>
            <div>
            <h1>Hello {fullName.fname} {fullName.lname} {fullName.email} </h1>
            <input type="text" placeholder=" enter fname" name="fname" onChange={inputEvent}
            value={fullName.fname}
               /><br/>
             <input type="text" placeholder=" enter lname"name="lname" onChange={inputEvent}
            value={fullName.lname}
            /><br/>
            <input type="text" placeholder=" enter email"name="email" onChange={inputEvent}
            value={fullName.email}/><br/>
            <label>
            <input
              type="radio"
              value="Male"
              id="Male"
              checked={selectedOption==="Male"}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              id="Female"
              checked={selectedOption==="Other"}
              
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              id="Other"
              checked={selectedOption==="Other"}
              
              
            />
            Other
          </label><br/>
            <button onClick={onSubmits}> Submit</button>
            </div>
            </form>
            </div>
            </>
    );

};





export default App;*/
