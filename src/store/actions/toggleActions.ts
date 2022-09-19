import { ToggleAction } from "store/types"
import { SET_DEGREES } from 'constants/actions'

export const setDegrees = (degrees: boolean): ToggleAction => {
    return {
        type: SET_DEGREES,
        payload: degrees
    }
}