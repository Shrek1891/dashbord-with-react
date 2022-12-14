import { useSelector} from "react-redux";
import { selectVisiblePositions} from "./position-slice";
import {selectFilters} from "../filter/filter-slice";

export const usePosition = () => {

    const currentFilters = useSelector(selectFilters);
    const  positions = useSelector((state) => selectVisiblePositions(state, currentFilters));
    return positions;
}