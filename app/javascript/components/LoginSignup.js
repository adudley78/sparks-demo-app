import React from 'react';

class LoginSignup extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form>
                        <h1>Login</h1>
                        <div>
                            <label htmlFor="username">
                                <strong>Username:</strong>
                                <input type="text" id="username" name="username" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password">
                                <strong>Password:</strong>
                                <input type="text" id="password" name="password" />
                            </label>
                        </div>
                        <div className="form-actions">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form>
                        <h1>Signup</h1>
                        <div>
                            <label htmlFor="username">
                                <strong>Username:</strong>
                                <input type="text" id="username" name="username" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password">
                                <strong>Password:</strong>
                                <input type="text" id="password" name="password" />
                            </label>
                        </div>
                        <div className="form-actions">
                            <button type="submit">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



export default LoginSignup;
