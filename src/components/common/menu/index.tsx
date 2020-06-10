import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

interface MenuItem {
  title: string;
  onClick: () => void;
}

interface MenuProps {
  id: string;
  anchorEl: HTMLElement | null;
  onClose?: () => void;
  items: MenuItem[];
}

export default function AppMenu(props: MenuProps) {
  const renderMenuItems = () => {
    return props.items.map((item: MenuItem) => (
      <MenuItem onClick={item.onClick}>{item.title}</MenuItem>
    ));
  };

  return (
    <Menu
      id={props.id}
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      onClose={props.onClose}
    >
      {renderMenuItems}
    </Menu>
  );
}
