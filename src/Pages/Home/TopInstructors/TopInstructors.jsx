import React from 'react';
import useTopInstructors from '../../../Hooks/useTopInstructors';

const TopInstructors = () => {
    
    const [topInstructors] = useTopInstructors();
console.log('sdf',topInstructors);
    return (
        <div>
            
        </div>
    );
};

export default TopInstructors;