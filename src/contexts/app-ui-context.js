import { createContext } from "react";

const AppUi = {
  openDrawer: false
}

const AppUiContext = createContext(AppUi)
export default AppUiContext
