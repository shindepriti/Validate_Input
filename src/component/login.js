import react from'react'

class Login extends react.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            fields:[],
            error:{}
        }
    }
    setviewStatus=(value)=>{
        let formIsValid = true
        let fields = this.state.fields
        let error = {}
        if(!fields['username']){
            formIsValid=false
            error['username'] = "please Enter UserName"
        }else{
            error['username']=""
        }
        if(!fields['password']){
            formIsValid=false
            error['password'] ="please Enter Password"
        }else{
            error['password'] =""
        }
        if(formIsValid === false){
            this.setState({error:error})
        }else{
            this.setState({viewProfile:value})
        }
    }
handleChange=(event)=>{
    let fields = this.state.fields
    fields[event.target.name]=event.target.value
    this.setState({fields:fields})
}
    render(){
        let {error}= this.state
        return(
            <div>
                <h1>Login Page</h1>
                
                <div>
                    <label>Username</label>
                    <input name="username" id="username" type="text"  onChange={this.handleChange.bind()} required/>
                    {error.username && <span style={{color:"red"}}>{error.username}</span>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" id="password" type="text"  onChange={this.handleChange.bind(this)} required/>
                        {error.password && <span style={{color:"red"}}>{error.password}</span>}
                    </div>
                    <div>
                        <input type="button" value="Login"  onClick={()=> this.setviewStatus('Wizard')}/>
                        </div>
                       
                </div>
        )
    }
}
export default Login