interface LayoutMenu {
  name: string;
  id: string;
}

interface LayoutData {
  hostName: string;
  logo: string;
  menu: LayoutMenu[];
}

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
