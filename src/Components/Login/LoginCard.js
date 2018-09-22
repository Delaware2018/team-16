import React, { Component } from 'react';
import { Input, Card, Icon, Button, Image, Transition } from 'semantic-ui-react';
import * as firebase from 'firebase';

class LoginCard extends Component {

    constructor(props) {
        super();

        this.state = {
            creating: false,
            name: '',
            password: '',
            confirmPass: '',
            email: '',
            createDisabled: true
        }
    }

    handleEmail = (e) => {
        this.props.setGlobal({
            userEmail: e.target.value
        })
    }

    handlePassword = (e) => {
        this.props.setGlobal({
            userPass: e.target.value
        })
    }

    handleLogin = (e) => {
        //Initialize Signin to Firebase
        firebase.auth().signInWithEmailAndPassword(this.props.globalState.userEmail, this.props.globalState.userPass).catch(function (error) {
            var errorMessage = error.message;

            if (errorMessage === "The password is invalid or the user does not have a password.") {
                this.setState({
                    errorOpen: true,
                    errorMessage: errorMessage
                });
                //Do the red shaky thing or whatever we want for a wrong password entered
            } else if (errorMessage === "The email address is badly formatted.") {
                this.setState({
                    errorOpen: true,
                    errorMessage: errorMessage
                });
            }

            console.log(errorMessage)
        }.bind(this))
    }

    handleCreate = (e) => {
        if (this.state.confirmPass === this.state.password &&
            this.state.password.length >= 6 &&
            this.state.email.includes("@") &&
            this.state.email.includes(".")) {

            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorMessage);
                if (errorMessage === "The email address is already in use by another account.") {
                    console.log("Do something here if the email is taken")
                }
            })

            var username = this.state.email;
            username = username.replace(/[$#\[\]]/, '').replace(/[@.]/, '-');
            console.log(username);
        }
    }

    handleInput = (event, name) => {
        this.setState({
            [name]: event.currentTarget.value
        })
    }

    getButtonText = () => {
        if (this.state.creating) {
            return "LOGIN"
        } else {
            return "CREATE ACCOUNT"
        }
    }

    render() {
        const logoStyle = {
            margin: 10
        }

        const cardStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '55%'
        }

        const inputStyle = {
            marginTop: '15px',
            marginLeft: '55px',
            marginRight: '55px'
        }

        const loginButtonStyle = {
            marginTop: '15px'
        }

        var animation = 'horizontal flip';

        return (
            <Card raised style={cardStyle}>
                <Card.Content>
                    <Card.Description textAlign='center'>
                        <Image centered src='./goodwillLogo.png' size='medium' />
                        <Transition.Group animation={animation} duraiton={500}>
                            {this.props.globalState.creating &&
                                <div>
                                    <Input
                                        style={inputStyle}
                                        fluid
                                        onChange={(e) => this.handleInput(e, "name")}
                                        size='big'
                                        iconPosition='left'
                                        placeholder='Name'>
                                        <Icon name='address card' />
                                        <input />
                                    </Input>
                                </div>
                            }
                        </Transition.Group>
                        <Input onChange={(e) => this.handleInput(e, "email")}
                            style={inputStyle}
                            fluid
                            size='big'
                            iconPosition='left'
                            placeholder='Email'>
                            <Icon name='at' />
                            <input />
                        </Input>
                        <Input onChange={(e) => this.handleInput(e, "password")}
                            style={inputStyle}
                            fluid size='big'
                            iconPosition='left'
                            type='password'
                            placeholder='Password'>
                            <Icon name='lock' />
                            <input />
                        </Input>
                        <Transition.Group animation={animation} duraiton={500}>
                            {this.props.globalState.creating &&
                                <div>
                                    <Input onChange={(e) => this.handleInput(e, "confirmPass")}
                                        style={inputStyle}
                                        fluid size='big'
                                        iconPosition='left'
                                        type='password'
                                        placeholder='Confirm Password'>
                                        <Icon name='lock' />
                                        <input />
                                    </Input>
                                </div>
                            }
                        </Transition.Group>

                        {!this.props.globalState.creating && <Button size='large' style={loginButtonStyle} onClick={this.handleLogin} primary>LOGIN</Button>}
                        {this.props.globalState.creating &&
                            <Button size='large' disabled={this.state.createDisabled} style={loginButtonStyle} onClick={this.handleCreate} primary>CREATE</Button>
                        }
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button primary onClick={() => { this.props.setGlobal({ creating: !this.props.globalState.creating }) }}>{this.getButtonText()}</Button>
                    <Button style={{ marginLeft: '20px',  }} primary>RESET PASSWORD</Button>
                </Card.Content>
            </Card>
        );
    }
}

export default LoginCard;