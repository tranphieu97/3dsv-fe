interface ItemDetail {
  name: string;
  value: string;
}

interface Item {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  categories: string[];
  quantity: number;
  status: string;
  details: ItemDetail[];
  createdDate: Date;
}

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

interface TableColumn {
  title: string;
  field: string;
  render?: (rowData) => JSX.Element;
}

interface TableAction {
  icon: JSX.Element | any;
  disabled?: boolean;
  onClick: function;
  isFreeAction?: boolean;
  tooltip: string;
  hidden?: boolean;
}

interface TableState {
  title?: string;
  columns: TableColumn[];
  data: Array<any>;
  actions?: TableAction[];
}
