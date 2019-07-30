import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu text>
                <Menu.Item header>Sparks</Menu.Item>
                <Menu.Item
                    name='new'
                    active={activeItem === 'new'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='past'
                    active={activeItem === 'past'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='submit'
                    active={activeItem === 'submit'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                />
                </Menu.Menu>
            </Menu>
        );
    };
};

export default Navbar;