import React from 'react';
import _style from './css/style.css';
var FakeData = require('./FakeData.json');


class App extends React.Component {
    constructor() {
        super();

        this.state = { data: [] };
    }

    componentDidMount() {
        //this.setState({ data: FakeData.data }); 

        fetch('http://localhost:8081/get')
        .then(response => {
            return response.json();
        }).then(body => {
            this.setState({ data: body.data })
        });
    };

    render() {
        //console.log(this.state.data);
        return (
            <div>
                <Header/>
                <div className='maingrid'>
                    <table>
                    <tbody>
                        {this.state.data.map((obj, i) => <TableRow key = {i} data = {obj} />)}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }    
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;