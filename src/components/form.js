import React from 'react';
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Eye = () => (
    <div>
     <FontAwesomeIcon icon={faEyeSlash} className="eye-slash"/>
    </div>
);

class Form extends React.Component {
state = {
  name: '',
  email: '',
  password: ''
}

changeEvent = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

  render() {

    return (
      <div id="form-component">
          <div className="sign-up-form">
           <h3>SIGN UP FOR FREE</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={e => this.changeEvent(e)}   />
                <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={e => this.changeEvent(e)} />
                <input type="password" required name="password" placeholder="Password" value={this.state.password} onChange={e => this.changeEvent(e)} />
                <Eye />
            </form>
          <input type="submit" value="Sign up" onClick={this.handleChange}  />
          <div className="terms-txt">
          <p>By clicking "Sign up" I agree to our</p>
           <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
    );
  }
}

export default Form;
