import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, MenuItemProps, Segment } from 'semantic-ui-react';

import MenuItems from './menu.json';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(MenuItems[0].name);

  const handleItemClick = (event: unknown, { name }: MenuItemProps) => {
    setActiveItem(name ?? MenuItems[0].name);
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        {MenuItems.map(({ name, route }: { name: string; route: string }, index) => (
          <NavLink key={index} to={route}>
            <Menu.Item
              key={index}
              name={name}
              active={activeItem === name}
              onClick={handleItemClick}
            />
          </NavLink>
        ))}
      </Menu>
    </Segment>
  );
};

export default Navbar;
