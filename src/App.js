import React, { Component } from 'react';
import './style.scss';
import 'font-awesome/css/font-awesome.min.css';
import Background from './images/backgroundimage.png';
import Header from './components/header.js';
import Form from './components/form.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
  <section id="background" style={{backgroundImage: `url(${Background})`}}>
      <div className="stamp-container">
       <Header />
        <div className="body-container">
         <Content />
          <Form />
         </div>
       <Footer />
    </div>
  </section>
    );
  }
}

export default App;
