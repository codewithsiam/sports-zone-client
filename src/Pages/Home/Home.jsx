import React from 'react';
import useClasses from '../../Hooks/useClasses';
import Banner from './Banner/Banner';

const Home = () => {

    const [classes] = useClasses();
    console.log('class',classes)

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;