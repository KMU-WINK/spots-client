import React, {useState, useRef} from 'react';
import * as styled from './styles';

// const prevScrollY = useRef(0);
// const [btnFix, setBtnFix] = useState(true);

// const onScroll = (e) => {
//     const currentScrollY = e.target.scrollTop;
//     if (prevScrollY.current < currentScrollY && btnFix) {
//         setBtnFix(false);
//     }
//     if (prevScrollY.current > currentScrollY && !btnFix) {
//         setBtnFix(true);
//     }
//     prevScrollY.current = currentScrollY;
//     console.log(btnFix, currentScrollY);
// };

// const onFix = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY )
// }

// const onClick = () => {

//     console.log(window.scrollY);
// }



const MatchingRegister = () => {
    console.log(window.scrollY);
    return(
        <styled.MatchingRegister>
            <styled.ResisterBtn onClick={onClick}>
                매칭 글 등록하기
            </ styled.ResisterBtn>
        </ styled.MatchingRegister>
    );
};

export default MatchingRegister;