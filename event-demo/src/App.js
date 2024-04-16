import React, { Component } from 'react';
import LTT_EventForm1 from './components/LTT_EventForm1';
import LTT_EventForm2 from './components/LTT_EventForm2';
import LTT_EventForm3 from './components/LTT_EventForm3';
import LTT_EventForm4 from './components/LTT_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Event Form Demo</h1>
          <LTT_EventForm1 />
          <LTT_EventForm2 />
          <LTT_EventForm3 />
          <LTT_EventForm4 name="Le Tuan Tinh" />
      </div>
    );
  }
}

export default App;