import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { AppStateContextProvider } from "./main/AppStateContext";
import SidePanel from "./main/SidePanel/SidePanel";
import ViewMainPage from "./main/ViewMainPage/ViewMainPage";
import { sessionReducer } from "./Reducers/Session.reducer";
import { CreateSession } from "./Services/Session";
import { urlDectrption } from './Services/Settings.service';

function App() {
  const [session, dispatch] = useReducer(
    sessionReducer.reducer,
    sessionReducer.initialSessionState
  );

  const [shop, setShop] = useState();

  // const shopName = window.location.search.split('=')[1];
  const urlParams = new URL(window.location.href).searchParams;
  const shopName = urlParams.get('d');

    // console.log(shopName);

  const shopGet = async () => {
    urlDectrption({ shopName }).then((res) => {
      // console.log(JSON.parse(res.shop));
      setShop(JSON.parse(res.shop));
    });
  }

  useEffect(() => {
    if(!shop){
      console.log("session not found");
      shopGet();
    }else{
      console.log("session found ",shop);
    }
    CreateSession()
      .then((res) => {
        dispatch({
          type: sessionReducer.SESSION_STATE.success,
          sessionResponse: res,
        });
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="App">
       {shop ?
      <AppStateContextProvider shop={shop}>
        <div className="d-flex col-12 h-100">
          <div className="col-3">
            <SidePanel />
          </div>
          <div className="col-9">
            <ViewMainPage />
          </div>
        </div>
      </AppStateContextProvider>: "Authentication failed open editor again from inside shopify app"}
    </div>
  );
}

export default App;
