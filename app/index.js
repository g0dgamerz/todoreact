import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component{
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }
    updateInput(key,value){
        this.setState({
            [key]:value
        })
    }
    addItem(){
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        const list = [...this.state.list];

        list.push(newItem);
        this.setState({
            list,
            newItem:""
        });
    }
    deleteItem(id){
        const list = [...this.state.list];
        const updateList = list.filter(item => item.id != id);
        this.setState({list: updateList});
    }
    render(){
        return(        
        <div className="header center" id="container">
        <div className="header">
        <h2>This is my todoList app using core react</h2>


            <input 
            type="text"
            placeholder="add your todos list here ..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
            onClick={() => this.addItem()}
            >Add todos</button>
        </div>

            <br/>
            <ul
            className="theList">
                {this.state.list.map(item => {
                    return(
                        <li key={item.id}
                        className="theList"
                        >
                            {item.value}
                            <button
                            onClick={() =>this.deleteItem(item.id)}>X</button>
                        </li>
                    )
                })}
            </ul>

            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'))