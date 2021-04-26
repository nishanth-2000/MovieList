import React, { Component } from "react";
import "./SignUp.css";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const NumRegex = RegExp(/\+?\d[\d -]{8,12}\d/);
// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val ==== null && (valid = false);
//   });

//   return valid;
// };

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            phoneNumber: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phoneNumber: ""
            }
        };
    }

    formValid = () => {
        var values = this.state;
        // validate form errors being empty
        if (values.firstName === "" | values.lastName === "" | values.password === "" | values.email === "" | values.phoneNumber === ""
            | values.firstName === null | values.lastName === null | values.password === null | values.email === null | values.phoneNumber === null) {
            return false;
        }
        // validate the form was filled out
        else if (values.firstName === "") {
            return false;
        }
        return true;
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        phoneNumber: ${this.state.phoneNumber}
      `);
            this.props.history.push({ pathname: "/login", state: { name: this.state.firstName, lastName: this.state.lastName, pass: this.state.password } });
        } else {
            console.error("FORM INVALID");
            alert("Please fill all fields");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "phoneNumber":
                formErrors.phoneNumber = !NumRegex.test(value) ? "Valid 10 digit Number required" : value.length === 10 ? "" : "Only 10 characters required";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit} Validate>
                    <div className="firstName">
                        <label>First Name</label>
                        <input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            noValidate
                            onBlur={this.handleChange}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )}
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )}
                    </div>
                    <div className="">
                        <label htmlFor="phoneNumber">phoneNumber</label>
                        <input
                            placeholder="phoneNumber"
                            type="phoneNumber"
                            name="phoneNumber"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.phoneNumber.length > 0 && (
                            <span className="errorMessage">{formErrors.phoneNumber}</span>
                        )}
                    </div>
                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default App;