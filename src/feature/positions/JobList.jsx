
import { JobPosition } from './JobPosition';
import {useDispatch} from "react-redux";
import {usePosition} from "./use-position";
import {useFetchPositions} from "./use-fetch-positions";
import {addFilter} from "../filter/filter-slice";

const JobList = () => {
  useFetchPositions();
  const positions =  usePosition();
  const dispatch = useDispatch();


  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
            key={item.id}
            {...item}
            handleAddFilter = {handleAddFilter}
        />
      ))}
    </div>
  )
}

export {JobList};