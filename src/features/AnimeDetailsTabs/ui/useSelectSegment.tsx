import { useState } from 'react';
import {navigations} from '../constants/constants'

export function useSelectSegment(initialValue: string = navigations[0]) {
    const [currentSegment,setCurrentSegment] = useState<string>(initialValue)

    const handleSegmentChange = (value: string) => {
        setCurrentSegment(value);
    };

    return [
        currentSegment,
        handleSegmentChange
    ] as const
}

export default useSelectSegment