import styled from 'styled-components';
import arrow from '../../../imgs/MatchMake/arrow.svg';


export const OptionBox = styled.div`
    margin : 20px 0 ${(props) => props.marginBot || 24}px;
    display : flex;
    flex-direction : column;
    position:relative;
`

export const Option = styled.div`
    display : flex;
`

export const OptionText = styled.p`
    font-size : 20px;
    line-height : 24px;
    font-weight : 700;
`

export const OptionInfo = styled.p`
    font-size : 16px;
    line-height : 19px;
    font-weight : 500;
    color : #D3D3D3;
    margin : 5px 0 0 28px;
`

export const GetMember = styled.div`
    height : 50px;
    width : 170px;
    border-radius : 12px;
    border: 1px solid #858585;
    margin-top : 12px;
    display : flex;
    // justify-content : space-around;
    justify-content : space-between;
    padding : 0 18px;
    align-items : center;
`

export const OptionBtn = styled.button`
    height : 50px;
    width : 305px;
    border-radius : 12px;
    border: 1px solid #FB1E53;
    margin-top : 12px;
    display : flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    justify-content : space-between;
    align-items : center;
    padding : 0 20px 0 28px;
    box-sizing : border-box;
    background : transparent;
`
export const OptionDropDown = styled.div`
    height : 160px;
    width : 305px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    box-sizing : border-box;
    padding : 10px 11px 0 11px;
    overflow-y : scroll;
    background : white;

    &::-webkit-scrollbar {
        width : 10px;
    }
     
    // &::-webkit-scrollbar-track {
    //     height : 50px;
    // }
     
    &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background-color : #D3D3D3;
    }

    position : absolute;
    top : 86px;
    z-index : 10;
`

export const SelectOption = styled.button`
    width : 100%;
    height : 40px;
    border-radius: 12px;
    margin-bottom : 10px;
    background : transparent;
    display : flex;
    align-items : center;
    padding-left : 16px;
    box-sizing : border-box;
    border : none;
    font-size : 16px;
    &:hover {
        background : #D3D3D3
    }
`

export const Arrow = styled.img.attrs({
    src: arrow,
  })`
    width: 20px;
    height: 12px;
`;

export const RotatedArrow = styled.img.attrs({
    src: arrow,
  })`
    width: 20px;
    height: 12px;
    transform : rotate(180deg);
`;

export const Btn = styled.button`
    width : 25px;
    height : 25px;
    border : none;
    background-color : white;
    display : inline-flex;
    align-items : center;
    justify-content : center;
`

export const NumMember = styled.p`
    font-size : 24px;
    font-weight : 800;
    line-height : 29px;
    color : #FB1E53;
    padding-bottom : 4px;
`



// import styled from 'styled-components';
// import arrow from '../../../imgs/MatchMake/arrow.svg';


// export const OptionBox = styled.div`
//     margin : 20px 0 ${(props) => props.marginBot || 24}px;
//     display : flex;
//     flex-direction : column;
// `

// export const Option = styled.div`
//     display : flex;
// `

// export const OptionText = styled.p`
//     font-size : 20px;
//     line-height : 24px;
//     font-weight : 700;
// `

// export const OptionInfo = styled.p`
//     font-size : 16px;
//     line-height : 19px;
//     font-weight : 500;
//     color : #D3D3D3;
//     margin : 5px 0 0 28px;
// `

// export const GetMember = styled.div`
//     height : 50px;
//     width : 170px;
//     border-radius : 12px;
//     border: 1px solid #858585;
//     margin-top : 12px;
//     display : flex;
//     // justify-content : space-around;
//     justify-content : space-between;
//     padding : 0 18px;
//     align-items : center;
// `

// // export const OptionDataDiv = styled.div`
// //     height : 50px;
// //     width : 305px;
// //     border-radius : 12px;
// //     border: 1px solid #FB1E53;
// //     margin-top : 12px;
// //     display : flex;
// //     font-weight: 500;
// //     font-size: 16px;
// //     line-height: 19px;
// //     justify-content : space-between;
// //     align-items : center;
// //     padding : 0 20px 0 28px;
// //     box-sizing : border-box;
// // `
// // export const OptionDropDown = styled.div`
// //     height : 156px;
// //     width : 305px;
// //     box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
// //     border-radius: 12px;
// //     // position : absolute;
// //     // top : 36px;
// //     background : black;
// //     box-sizing : border-box;
// // `



// export const Btn = styled.button`
//     width : 25px;
//     height : 25px;
//     border : none;
//     background-color : white;
//     display : inline-flex;
//     align-items : center;
//     justify-content : center;
// `

// export const NumMember = styled.p`
//     font-size : 24px;
//     font-weight : 800;
//     line-height : 29px;
//     color : #FB1E53;
//     padding-bottom : 4px;
// `
// export const SelectBox = styled.div`
//     display : flex;
//     height : 50px;
//     width : 305px;
//     margin-top : 12px;
// `

// export const Select = styled.select`
//     height : 100%;
//     width : 100%;
//     border-radius : 12px;
//     border: 1px solid #FB1E53;
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 19px;
//     padding : 0 20px 0 28px;
//     box-sizing : border-box;
//     -webkit-appearance: none;
//     -moz-appearance: none;
// 	appearance: none;
//     background : transparent;

//     &: focus {
//         color : blue;
//     }
// `

// export const SelectOption = styled.option`
//     background : lightgray;

//     // color : red;
// `

// export const Arrow = styled.img.attrs({
//     src: arrow,
//   })`
//     width: 20px;
//     height: 12px;
//     right : 41px;
//     top : 18px;
//     position : relative;
//     z-index: -1;

// `;

// export const RotatedArrow = styled.img.attrs({
//     src: arrow,
//   })`
//     width: 20px;
//     height: 12px;
//     transform : rotate(180deg);
//     right : 41px;
//     top : 18px;
//     position : relative;
//     z-index: -1;
// `;