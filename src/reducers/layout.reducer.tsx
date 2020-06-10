const layoutData: LayoutData = {
  hostName: 'HostName',
  logo: '',
  menu: [
    {
      name: 'Home',
      id: 'home',
    },
  ],
};

const layoutReducer = (state = layoutData, action: any) => {
  return layoutData;
};

export default layoutReducer;
