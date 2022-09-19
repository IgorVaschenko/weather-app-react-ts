import { FC } from "react";

import {
    ToggleSource,
    LabelInfoLeft,
    ToggleSwitch,
    ToggleLabel,
    ToggleInput,
    LabelInfoRight,
    ToggleSpan
} from 'components/Toggle/components' 


interface ToggleProps {
    pointer: boolean;
    nameLeft: string;
    nameRight: string;
    onClick: () => void;
}

const Toggle: FC<ToggleProps> = ({ pointer, nameLeft, nameRight, onClick }) => {
    return (
        <ToggleSource >
            <LabelInfoLeft pointer={!pointer}>{nameLeft}</LabelInfoLeft>
            <ToggleSwitch>
                <ToggleLabel>
                    <ToggleInput type="checkbox" onClick={onClick} />
                    <ToggleSpan />
                </ToggleLabel>
            </ToggleSwitch>
            <LabelInfoRight pointer={pointer}>{nameRight}</LabelInfoRight>
        </ToggleSource>
    );
}

export default Toggle;
