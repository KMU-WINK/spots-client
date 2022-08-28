// import React, { useState } from 'react';
// import * as styled from './styles';
// import { Container, Box, Text, Horizon } from '../common';
// import minus from '../../../imgs/MatchMake/minus.svg';
// import plus from '../../../imgs/MatchMake/plus.svg';

// const Condition = () => {
//     const [numMember, setNumMember] = useState(1);
    
//     const onIncMember = () => {
//         if (numMember < 22) {
//             setNumMember(numMember + 1)
//         }
//     }
//     const onDecMember = () => {
//         if (numMember > 1) {
//             setNumMember(numMember - 1)
//         }
//     }

//     const townList = ['서초 1동', '서초 2동', '서초 3동', '정릉 1동', '정릉 2동', '정릉 3동']
//     const [town, setTown] = useState('서초 1동');

//     const handleTown = (e) => {
//         setTown(e.target.value);
//     }

//     const sexList = ['둘 다', '여자만', '남자만']
//     const [sex, setSex] = useState('둘 다')

//     const handleSex = (e) => {
//         setSex(e.target.value);
//     }

//     const [level, setLevel] = useState('상');
//     const levelList = ['상', '중', '하']
    
//     const handleLevel = (e) => {
//         setLevel(e.target.value);
//     }

//     const [isRotate, setIsRotate] = useState({
//         "town" : false,
//         "sex" : false,
//         "level" : false
//     })

//     // const updateRotate = (e) => {
//     //     const type = e.currentTarget.name
//     //     return ({
//     //         "town" : ("town" == type),
//     //         "sex" : ("sex" == type),
//     //         "level" : ("level" == type)
//     //     })
//     // }

//     const defaultRotate = () => {
//         setIsRotate({
//             "town" : false,
//             "sex" : false,
//             "level" : false
//         })
//     }

//     const updateRotate = (e) => {
//         const type = e.currentTarget.name
//         setIsRotate({
//             "town" : ("town" == type),
//             "sex" : ("sex" == type),
//             "level" : ("level" == type)
//         })
//     }

//     const onRotate = (e) => {
//         const tag = e.currentTarget.name
//         if (isRotate[tag]) {
//             defaultRotate();
//         } else {
//             updateRotate(e);
//         }
//     }

    

//     return(
//         <Container>
//             <Box>
//                 <Text>
//                     매칭 조건 설정
//                 </Text>
//                 <styled.OptionBox>
//                     <styled.Option>
//                         <styled.OptionText>
//                             인원
//                         </styled.OptionText>
//                         <styled.OptionInfo>
//                             모집 인원을 설정해주세요.
//                         </styled.OptionInfo>
//                     </styled.Option>
//                     <styled.GetMember>
//                         {/* {console.log(sex[1].text)} */}
//                         <styled.Btn onClick={onDecMember}><img src={minus} /></styled.Btn>
//                         <styled.NumMember >{numMember}</styled.NumMember>
//                         <styled.Btn onClick={onIncMember}><img src={plus} /></styled.Btn>
//                     </styled.GetMember>
//                 </styled.OptionBox>


//                 <Horizon />
//                 <styled.OptionBox>
//                     <styled.Option>
//                         <styled.OptionText>
//                             동네
//                         </styled.OptionText>
//                         <styled.OptionInfo>
//                             매칭글을 보여줄 동네를 선택해주세요.
//                         </styled.OptionInfo>
//                     </styled.Option>
//                     <styled.SelectBox>
//                         <styled.Select onMouseDown={onRotate} onFocus={updateRotate} onBlur={defaultRotate} onChange={handleTown} value={town} name="town">
//                             {townList.map((item) => (
//                                 <styled.SelectOption value={item} key={item}>
//                                     {item}
//                                 </styled.SelectOption>
//                             ))}
//                         </styled.Select>
//                         {
//                             isRotate["town"]
//                             ? <styled.RotatedArrow />
//                             : <styled.Arrow />
//                         }
//                     </styled.SelectBox>
//                 </styled.OptionBox>


//                 <Horizon />
//                 <styled.OptionBox>
//                     <styled.Option>
//                         <styled.OptionText>
//                             성별
//                         </styled.OptionText>
//                         <styled.OptionInfo>
//                             매칭을 원하는 성별을 선택해주세요.
//                         </styled.OptionInfo>
//                     </styled.Option>
//                     <styled.SelectBox>
//                         <styled.Select onMouseDown={onRotate} onFocus={updateRotate} onBlur={defaultRotate} onChange={handleSex} value={sex} name="sex">
//                             {sexList.map((item) => (
//                                 <styled.SelectOption value={item} key={item}>
//                                     {item}
//                                 </styled.SelectOption>
//                             ))}
//                         </styled.Select>
//                         {
//                             isRotate["sex"]
//                             ? <styled.RotatedArrow />
//                             : <styled.Arrow />
//                         }
//                     </styled.SelectBox>
//                 </styled.OptionBox>


//                 <Horizon />
//                 <styled.OptionBox>
//                     <styled.Option>
//                         <styled.OptionText>
//                             레벨
//                         </styled.OptionText>
//                         <styled.OptionInfo>
//                             매칭을 원하는 운동 레벨을 선택해주세요.
//                         </styled.OptionInfo>
//                     </styled.Option>
//                     <styled.SelectBox>
//                         <styled.Select onMouseDown={onRotate} onFocus={updateRotate} onBlur={defaultRotate} onChange={handleLevel} value={level} name="level">
//                             {levelList.map((item) => (
//                                 <styled.SelectOption value={item} key={item}>
//                                     {item}
//                                 </styled.SelectOption>
//                             ))}
//                         </styled.Select>
//                         {
//                             isRotate["level"]
//                             ? <styled.RotatedArrow />
//                             : <styled.Arrow />
//                         }
//                     </styled.SelectBox>
//                 </styled.OptionBox>

                

//                 {/* <styled.OptionBox>
//                     <styled.Option>
//                         <styled.OptionText>
//                             동네
//                         </styled.OptionText>
//                         <styled.OptionInfo>
//                             매칭글을 보여줄 동네를 선택해주세요.
//                         </styled.OptionInfo>
//                     </styled.Option>
//                     <styled.OptionBtn>
//                         {town}
//                         <styled.Btn onClick={onRotate} name="town">
//                             {
//                                 isRotate["town"]
//                                 ? <styled.RotatedArrow />
//                                 : <styled.Arrow />
//                             }
//                         </styled.Btn>
//                     </styled.OptionBtn>
//                     { isRotate["town"] && <styled.OptionDropDown />}
//                 </styled.OptionBox>
//                 <Horizon />

//                 <styled.OptionBox>
//                     <styled.Option>
//                         <styled.OptionText>
//                             성별
//                         </styled.OptionText>
//                         <styled.OptionInfo>
//                             매칭을 원하는 성별을 선택해주세요.
//                         </styled.OptionInfo>
//                     </styled.Option>
//                     <styled.OptionBtn>
//                         {sex}
//                         <styled.Btn onClick={onRotate} name="sex">
//                             {
//                                 isRotate["sex"]
//                                 ? <styled.RotatedArrow />
//                                 : <styled.Arrow />
//                             }
//                         </styled.Btn>
//                     </styled.OptionBtn>
//                     { isRotate["sex"] && <styled.OptionDropDown />}
//                 </styled.OptionBox>
//                 <Horizon />

//                 <styled.OptionBox marginBot="0">
//                     <styled.Option>
//                         <styled.OptionText>
//                             레벨
//                         </styled.OptionText>
//                         <styled.OptionInfo>
//                             매칭을 원하는 운동 레벨을 선택해주세요.
//                         </styled.OptionInfo>
//                     </styled.Option>
//                     <styled.OptionBtn>
//                         {level}
//                         <styled.Btn onClick={onRotate} name="level">
//                             {
//                                 isRotate["level"]
//                                 ? <styled.RotatedArrow />
//                                 : <styled.Arrow />
//                             }
//                         </styled.Btn>
//                     </styled.OptionBtn>
//                     { isRotate["level"] && <styled.OptionDropDown />}
//                 </styled.OptionBox> */}

//             </Box>
//         </Container>
//     )
// }

// export default Condition;



import React, { useState } from 'react';
import * as styled from './styles';
import { Container, Box, Text, Horizon } from '../common';
import minus from '../../../imgs/MatchMake/minus.svg';
import plus from '../../../imgs/MatchMake/plus.svg';

const Condition = () => {
    const [numMember, setNumMember] = useState(1);
    
    // const [town, setTown] = useState('서초 1동');
    // const [townList, setTownList] = useState([
    //     {id : 1, text : '서초 1동'},
    //     {id : 2, text : '서초 2동'},
    //     {id : 3, text : '서초 3동'},
    //     {id : 4, text : '정릉 1동'},
    //     {id : 5, text : '정릉 2동'},
    //     {id : 6, text : '정릉 3동'},
    // ])

    // const [sex, setSex] = useState('둘 다')
    // const sexList = [
    //     {id : 1, text : '둘 다'},
    //     {id : 2, text : '여자만'},
    //     {id : 3, text : '남자만'},
    // ]

    // const [level, setLevel] = useState('상');
    // const levelList = [
    //     {id : 1, text : '상'},
    //     {id : 2, text : '중'},
    //     {id : 3, text : '하'},
    // ]

    const townList = ['서초 1동', '서초 2동', '서초 3동', '정릉 1동', '정릉 2동', '정릉 3동']
    const [town, setTown] = useState('서초 1동');

    const handleTown = (e) => {
        setTown(e.target.value);
        clearRotate()
    }

    const sexList = ['둘 다', '여자만', '남자만']
    const [sex, setSex] = useState('둘 다')

    const handleSex = (e) => {
        setSex(e.target.value);
        clearRotate()
    }

    const [level, setLevel] = useState('상');
    const levelList = ['상', '중', '하']
    
    const handleLevel = (e) => {
        setLevel(e.target.value);
        clearRotate()
    }

    

    const onIncMember = () => {
        if (numMember < 22) {
            setNumMember(numMember + 1)
        }
    }
    const onDecMember = () => {
        if (numMember > 1) {
            setNumMember(numMember - 1)
        }
    }

    const [isRotate, setIsRotate] = useState({
        "town" : false,
        "sex" : false,
        "level" : false
    })

    const updateRotate = (type) => {
        return ({
            "town" : ("town" == type),
            "sex" : ("sex" == type),
            "level" : ("level" == type)
        })
    }

    const clearRotate = () => {
        setIsRotate(updateRotate(""))
    }

    const onRotate = (e) => {
        const tag = e.currentTarget.name
        if (isRotate[tag]) {
            setIsRotate(prevState => ({
                ...prevState,
                [tag] : false,
            }));
        } else {
            setIsRotate(updateRotate(tag))
        }
    }
    return(
        <Container>
            <Box>
                <Text>
                    매칭 조건 설정
                </Text>
                <styled.OptionBox>
                    <styled.Option>
                        <styled.OptionText>
                            인원
                        </styled.OptionText>
                        <styled.OptionInfo>
                            모집 인원을 설정해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.GetMember>
                        <styled.Btn onClick={onDecMember}><img src={minus} /></styled.Btn>
                        <styled.NumMember >{numMember}</styled.NumMember>
                        <styled.Btn onClick={onIncMember}><img src={plus} /></styled.Btn>
                    </styled.GetMember>
                </styled.OptionBox>
                <Horizon />

                <styled.OptionBox>
                    <styled.Option>
                        <styled.OptionText>
                            동네
                        </styled.OptionText>
                        <styled.OptionInfo>
                            매칭글을 보여줄 동네를 선택해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.OptionBtn onClick={onRotate} name="town">
                        {town}
                            {
                                isRotate["town"]
                                ? <styled.RotatedArrow />
                                : <styled.Arrow />
                            }
                    </styled.OptionBtn>
                    { isRotate["town"] && 
                    <styled.OptionDropDown>
                        {townList.map((item) => (
                            <styled.SelectOption value={item} key={item} onClick={handleTown}>
                                {item}
                            </styled.SelectOption>
                        ))}
                    </styled.OptionDropDown>
                    }
                </styled.OptionBox>
                <Horizon />

                <styled.OptionBox>
                    <styled.Option>
                        <styled.OptionText>
                            성별
                        </styled.OptionText>
                        <styled.OptionInfo>
                            매칭을 원하는 성별을 선택해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.OptionBtn onClick={onRotate} name="sex">
                        {sex}
                            {
                                isRotate["sex"]
                                ? <styled.RotatedArrow />
                                : <styled.Arrow />
                            }
                    </styled.OptionBtn>
                    { isRotate["sex"] && 
                    <styled.OptionDropDown>
                        {sexList.map((item) => (
                            <styled.SelectOption value={item} key={item} onClick={handleSex}>
                                {item}
                            </styled.SelectOption>
                        ))}
                    </styled.OptionDropDown>
                    }
                </styled.OptionBox>
                <Horizon />

                <styled.OptionBox marginBot="0">
                    <styled.Option>
                        <styled.OptionText>
                            레벨
                        </styled.OptionText>
                        <styled.OptionInfo>
                            매칭을 원하는 운동 레벨을 선택해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.OptionBtn onClick={onRotate} name="level">
                        {level}
                            {
                                isRotate["level"]
                                ? <styled.RotatedArrow />
                                : <styled.Arrow />
                            }
                    </styled.OptionBtn>
                    { isRotate["level"] && 
                    <styled.OptionDropDown>
                        {levelList.map((item) => (
                            <styled.SelectOption value={item} key={item} onClick={handleLevel}>
                                {item}
                            </styled.SelectOption>
                        ))}
                    </styled.OptionDropDown>
                    }
                </styled.OptionBox>

            </Box>
        </Container>
    )
}

export default Condition;