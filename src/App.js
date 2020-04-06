import React from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //Dados chegando da API, declarando um array para eles e o estado de isLoaded como falso.
      items: [],
      isLoaded: false,
    }
  }

//Após o render() ser rodado, o compomente será montado
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'}) 
  .then(res => res.json())
  .then(res => this.setState({ items: res, isLoaded: true }))
}

render() {

  var {isLoaded } = this.state; 
  //Se isLoaded não receber o componente
  if(!isLoaded){
    return <div>Loading....</div>
  //Se o componente chegar da API
  }else{
    return (
      //Entrando no Link do fetch e observando o JSON, pode-se adicionar os campos que quiser nos Th's e Td's
      <div className="App">
         <Table>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
          {this.state.items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </Table>
      </div>
      );
  }
  }
}

export default App;
