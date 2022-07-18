import React,{useState} from "react";
import GitHubUser from "./component/GitHubUser";
import SearchForm from "./component/SearchForm";
import Fetch from "./component/Fetch";

function App() {
  const [login,setLogin]=useState("moontahoe");
  const [searchVal,setSearchVal] = useState(login);
  return (
      <>
          <SearchForm value={login} onSearch={[setLogin,setSearchVal]}/>
          <GitHubUser login={searchVal}/>
          <Fetch
              uri={`https://api.github.com/users/${searchVal}`}
              loadingFallBack={searchVal}
              renderError={error => {
                  //오류처리
                  return <p>Something went wrong... {error.message}</p>;
              }}
              renderSuccess={(data) => (
                  <>
                      <h1>Todo: Render UI for data</h1>
                      <pre>{JSON.stringify(data,null,2)}</pre>
                  </>
              )}
          />
      </>
  );
}

export default App;
