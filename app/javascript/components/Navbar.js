import React from 'react';
// import { Input, Menu } from 'semantic-ui-react';

function Navbar() {
    return (
        <div className="ui menu">
            <div className="header item">
                SPARKS
            </div>
                <a className="item">
                    New
                </a>
                <a className="item" href={'/submit'}>
                    Submit
                </a>
            <div className="right menu">
                <div className="header item" href={'/login'}>
                    Login
                </div>
                <a className="item" href={'/about'}>
                    About
                </a>
            </div>
        </div>
    );
};

// class Navbar extends React.Component {
//     state = { activeItem: 'home' }

//     handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//     render() {
//         const { activeItem } = this.state

//         return (
//             <Menu text>
//                 <Menu.Item header>Sparks</Menu.Item>
//                 <Menu.Item
//                     name='new'
//                     active={activeItem === 'new'}
//                     onClick={this.handleItemClick}
//                 />
//                 <Menu.Item
//                     name='past'
//                     active={activeItem === 'past'}
//                     onClick={this.handleItemClick}
//                 />
//                 <Menu.Item
//                     name='submit'
//                     active={activeItem === 'submit'}
//                     onClick={this.handleItemClick}
//                 />
//                 <Menu.Menu position='right'>
//                     <Menu.Item>
//                         <Input icon='search' placeholder='Search...' />
//                     </Menu.Item>
//                     <Menu.Item
//                         name='login'
//                         active={activeItem === 'login'}
//                         onClick={this.handleItemClick}
//                 />
//                 </Menu.Menu>
//             </Menu>
//         );
//     };
// };

export default Navbar;