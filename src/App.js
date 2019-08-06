import React from 'react'
import MultipleUser from'./MultipleUser'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

      numberEntered: 0,
      numbers : [],
      names : []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const formData = this.state
    console.log(formData)
  }
  handleNameChange(name, position){
		console.log("parent",name)
		let names = this.state.names
      names[position] = name
	
		this.setState((prevState) => ({
			names : 	names
		}))
		console.log('Formdata',this.state.names)
	}

  handleAdd(e){
    let numberEntered = Number(e.target.value)
    console.log(numberEntered)
    const numberArray = []  // Creating array to call child so many times
    const namesArray = [] // Creating to initialise all the values of name fields
    if(numberEntered != this.state.numberEntered){
        if(numberEntered > this.state.numberEntered){
          
        }
      this.state.numberEntered
      this.setState(() => ({
        numbers : numberArray,
        names : namesArray, 
        numberEntered : numberEntered
      }))

    }else{
      let numbers = this.state.numbers
      let names = this.state.names
      for(let i = 0; i < numberEntered; i++){
        numbers.push(i)
        names[i] = {id : i , name: '' }
      }
    this.setState(() => ({
      numbers : numbers,
      names : names, 
      numberEntered : numberEntered
    }))
    }  
  }

  
 

  render(){
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
        <input type="number" onChange = {this.handleAdd} />
        <input type='submit'/>
        {this.state.numbers.length == 0 ? <h2>Please enter a number greater than zero</h2> :
          <ul> 
            {
              this.state.numbers.map( number =>
        
                <li key ={number}>
                  <MultipleUser 
                    handleNameChange = {this.handleNameChange} 
                    position ={number} 
         
                  />
                </li> 	 
                
              )
            }
          </ul>
        }
        {console.log(this.state)}
        </form>  
      </div>
    )
  
  }

}



export default App;
