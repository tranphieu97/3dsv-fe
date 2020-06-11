import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

export default function AppMenu(props: MenuProps) {
  const menuItems = props.items.map((item: MenuItem, index: number) => (
    <MenuItem key={index} onClick={item.onClick}>
      {item.title}
    </MenuItem>
  ));

  return (
    <Menu
      id={props.id}
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      onClose={props.onClose}
      keepMounted
    >
      {menuItems}
    </Menu>
  );
}
