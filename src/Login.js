import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameVal: this.props.location.state.name,
            lastNameVal: this.props.location.state.lastName,
            passwordVal: this.props.location.state.pass,
            firstName: '',
            lastName: '',
            password: '',
            formErrors: {
                header: "",
                firstName: "",
                lastName: "",
                password: "",
            }

        }
    }

    handleChange = (e) => {
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
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var values = this.state;
        let formErrors = { ...this.state.formErrors };

        if (values.firstName === "" | values.lastName === "" | values.password === ""
            | values.firstName === null | values.lastName === null | values.password === null) {
            alert("Please fill all fields");
        }
        else if (values.firstName === values.firstNameVal && values.lastName === values.lastNameVal && values.password === values.passwordVal) {
            alert("Welcome Back!");
            this.props.history.push('/movie-list');
        }
        else {
            formErrors.header = "Invalid name or password";
            this.setState({ formErrors })
        }
    }

    render() {
        const { formErrors } = this.state;

        return (
            <div className="form-wrapper">
                <h1>Login Account</h1>
                {formErrors.header.length > 0 && (
                    <span className="errorMessage">{formErrors.header}</span>
                )}
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
                    <div className="createAccount">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
