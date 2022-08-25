import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Nav extends Component {
  state = {
    activeItem: 'Recherche',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Recherche"
          active={activeItem === 'Recherche'}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          Recherche
        </Menu.Item>

        <Menu.Item
          name="FAQ"
          active={activeItem === 'FAQ'}
          onClick={this.handleItemClick}
          as={Link}
          to="/faq"
        >
          FAQ
        </Menu.Item>
      </Menu>
    );
  }
}
