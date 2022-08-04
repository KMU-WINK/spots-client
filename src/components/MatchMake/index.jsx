import React from 'react';
import * as styled from './styles';
import GlobalStyleMatchMake from './GlobalStyleMatchMake';
import Title from './Title';
import Date from './Date';
import Location from './Location'
import Condition from './Condition'
import Type from './Type'
import Contact from './Contact';

const MatchMake = () => {
    return (
        <styled.MatchMakeContainer>
            <GlobalStyleMatchMake />
            <Title />
            <Date />
            <Location />
            <Condition />
            <Type />
            <Contact />
        </styled.MatchMakeContainer>
    )
}
export default MatchMake;

// 56*100/1920