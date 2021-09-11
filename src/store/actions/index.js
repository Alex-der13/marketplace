import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "./books";

const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({getBooks}, dispatch)
}

export default useActions