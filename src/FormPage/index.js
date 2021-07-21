import React, { Component } from "react";
import "./styles.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

class FormPage extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      value: "",
    };
  }

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: String(value),
    });
  };

  handleResult = (e) => {
    e.preventDefault();

    const { number1, number2, number3, number4, phoneNumber } = e.target;

    if (this.state.result < 10) {
      this.setState({
        result: this.state.result + 1,
      });
    }
    console.log(
      number1.value,
      number2.value,
      number3.value,
      number4.value,
      phoneNumber.value
    );
    this.setState({
      value: "",
    });
    e.target.reset();
  };

  render() {
    return (
      <>
        <div className="Container">
          <div className="Content">
            <div className="Title">Form Contact</div>
            <form onSubmit={this.handleResult}>
              <div className="FormBox">
                <input
                  name="number1"
                  className="input"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  name="number2"
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <input
                  name="number3"
                  className="input"
                  type="text"
                  placeholder="Middle Name"
                  required
                />
                <input
                  name="number4"
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                />
                <PhoneInput
                  className="input"
                  international
                  defaultCountry="UZ"
                  name="phoneNumber"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e })}
                  required
                />
              </div>
              <div className="BtnBox">
                <button className="form-btn">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default FormPage;
