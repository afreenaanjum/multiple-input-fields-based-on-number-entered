import React from 'react'

class MultipleField extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			name : {}
		}
		this.handleNameChange= this.handleNameChange.bind(this)
		
	}

	handleNameChange(e){
		
		const name = e.target.value
		this.setState((prevState)=>({
			name: Object.assign({},prevState.name,{ id : this.props.position, value : name})
		}))	
		this.props.handleNameChange(this.state.name, this.props.position)
	}

	

	

	render(){
		
		return(
			<div>	
				<label> Name:
					<input 
						type='text' 
						placeholder = 'Enter name'
						onChange={this.handleNameChange}         
						value = {this.state.name.value || ''} 
					/>
					 
				</label>
			</div>
		)
			
	}
	
}

export default MultipleField