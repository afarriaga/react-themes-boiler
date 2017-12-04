import React, { Component } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import ThemeSwitch from 'components/ThemeSwitch';
import themes from 'themes'

const Outer = Styled.div`
  text-align: center;
`;

const Intro = Styled.div`
  font-size: large;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes['default'],
    };
    this.switchTheme = this.switchTheme.bind(this);
  }
  switchTheme(theme) {
    this.setState({
      theme,
    });
  }
  render() {
    const { theme } = this.state;
    return (
      <Outer>
        <ThemeSwitch onClick={this.switchTheme} />
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
        <Intro>
          <p>This app has been bundled with Create React App.</p>
        </Intro>
      </Outer>
    );
  }
}

export default App;
