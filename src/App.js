import React, { Component } from 'react';
import './App.css';

import Search from "./components/Search";
import {Container} from "reactstrap";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <header>
            <Container>
                <h1>Поиск людей в справочнике</h1>
            </Container>
        </header>

          <Container>
              <h2> При вводе  </h2>
            <Search/>
              <h2> С отправкой </h2>
            <Search isSubmit/>
            <List />
          </Container>
      </div>
    );
  }
}

export default App;
