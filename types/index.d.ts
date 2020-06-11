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

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface VerticalTab {
  title: string;
  component: JSX.Element;
}

interface VerticalTabsProps {
  tabs: VerticalTab[];
}
