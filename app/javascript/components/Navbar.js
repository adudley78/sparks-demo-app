import React from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='new'
                    active={activeItem === 'new'}
                    onClick={this.handleItemClick}
                >
                    New
                </Menu.Item>

                <Menu.Item
                    name='past'
                    active={activeItem === 'past'}
                    onClick={this.handleItemClick}>
                    
                    Past
                </Menu.Item>

                <Menu.Item
                    name='submit'
                    active={activeItem === 'submit'}
                    onClick={this.handleItemClick}>
                    
                    Submit
                </Menu.Item>

                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}>

                    Login
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navbar;