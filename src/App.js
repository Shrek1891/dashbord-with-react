import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./feature/filter/FilterPanel";
import {JobList} from "./feature/positions/JobList";


function App() {

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
