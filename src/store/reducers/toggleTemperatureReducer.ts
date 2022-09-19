import { ToggleAction, ToggleState } from "store/types";
import {SET_DEGREES} from 'constants/actions'

const initialState: ToggleState = {
    degrees: true,
}

export default (state = initialState, action: ToggleAction): ToggleState =>{
    switch (action.type) {
        case SET_DEGREES :
            return {
                degrees: action.payload
            }
        default:
            return state;
    }
}