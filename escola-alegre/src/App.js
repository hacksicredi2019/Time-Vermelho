import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Search from "./component/search";
import MaterialCard from "./component/card/card.js";
import { Waypoint } from 'react-waypoint';

class App extends React.Component {
  state = {
    // escola: null,
    schools: [],
    search: "",
    compare: [],
    loading: true
  };

  async fetchData({ value = "", page = 1, incremental = true }) {
    this.setState(state => ({ ...state, loading: true }));
    
    const { data: { data: { school }} } = await axios({
      url: 'http://172.22.238.199:3000/graphql/',
      method: 'post',
      data: {
        query: `query{
          school(name: "${value}" page: ${page}){
            name
            id
            rate,
            location { endereco }
          }
        }`
      },
    });

    
    if (incremental) {
      if (!school) return;
      this.setState(state => ({ ...state, loading: false, schools: [...state.schools, ...school], page }));
    } else {
      this.setState(state => ({ ...state, loading: false, schools: school ? school : [], page }));
    }
  }
  
  async handleQuery(value) {
   console.log("query", value);
   this.setState({search:value});
   await this.fetchData({ value: value, page: 1, incremental: false });
 };



  componentDidMount() {
    this.fetchData({ value: this.state.search, page: 1, incremental: false });
  }

  handlePoisitionChange = () => {
    this.fetchData({ value: this.state.search, page: this.state.page + 1 });
  }

  /**handleQuery = (value) => {
    return true;
  }*/

  handleCompare = () => {
    return true;
  }

  render() {
    const { escola, search } = this.state;
  
    console.log(this.state.schools);

    return (
      <div className="App">
        <header className="App-header" ref={this.pageRef}>
          <img src={logo} className="App-logo" alt="logo" />
          <Search placeholder="Digite seu endereço aqui" onChange={value => this.handleQuery(value)} />
        </header>
        <div style={{ height: '200em' }}>
            {this.state.schools.map((value, index) =>
              <MaterialCard key={index} data={value} avatar="G" name={value["name"]} endereco={value["location"] && value["location"]["endereco"]} rate={value["rate"]} index={index} onCompare={(value) => this.handleCompare(value)} />
            )}
          {!this.state.loading && <Waypoint onEnter={this.handlePoisitionChange} />}
          <p /><p />
          {<p style={{ color: "#CA0201", fontWeight: 'bold' }}>Nenhuma escola foi localizada com este nome</p>}
        </div>
      </div>
    );
  }
}

export default App;
