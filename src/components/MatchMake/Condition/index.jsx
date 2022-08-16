import React, { useState } from 'react';
import * as styled from './styles';
import { Container, Box, Text, Horizon } from '../common';
import minus from '../../../imgs/MatchMake/minus.svg';
import plus from '../../../imgs/MatchMake/plus.svg';

const Condition = () => {
    const [numMember, setNumMember] = useState(1);
    
    const [town, setTown] = useState('서초 1동');
    const [townList, setTownList] = useState([
        {id : 1, text : '서초 1동'},
        {id : 2, text : '서초 2동'},
        {id : 3, text : '서초 3동'},
        {id : 4, text : '정릉 1동'},
        {id : 5, text : '정릉 2동'},
        {id : 6, text : '정릉 3동'},
    ])

    const [sex, setSex] = useState('둘 다')
    const sexList = [
        {id : 1, text : '둘 다'},
        {id : 2, text : '여자만'},
        {id : 3, text : '남자만'},
    ]

    const [level, setLevel] = useState('상');
    const levelList = [
        {id : 1, text : '상'},
        {id : 2, text : '중'},
        {id : 3, text : '하'},
    ]
    
    const [lotate, setLotate] = useState(false);

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

    const onRotate = (e) => {
        const tag = e.currentTarget.name
        if (isRotate[tag]) {
            e.target.style.transform = "rotate(0deg)"
            setIsRotate(prevState => ({
                ...prevState,
                [tag] : false,
            }));
        } else {
            e.target.style.transform = "rotate(180deg)"
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
                        {/* {console.log(sex[1].text)} */}
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
                    <styled.OptionDataDiv>
                        {town}
                        <styled.Btn onClick={onRotate} name="town">
                            {
                                isRotate["town"]
                                ? <styled.RotatedArrow />
                                : <styled.Arrow />
                            }
                        </styled.Btn>
                    </styled.OptionDataDiv>
                    { isRotate["town"] && <styled.OptionDropDown />}
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
                    <styled.OptionDataDiv>
                        {sex}
                        <styled.Btn onClick={onRotate} name="sex">
                            {
                                isRotate["sex"]
                                ? <styled.RotatedArrow />
                                : <styled.Arrow />
                            }
                        </styled.Btn>
                    </styled.OptionDataDiv>
                    { isRotate["sex"] && <styled.OptionDropDown />}
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
                    <styled.OptionDataDiv>
                        {level}
                        <styled.Btn onClick={onRotate} name="level">
                            {
                                isRotate["level"]
                                ? <styled.RotatedArrow />
                                : <styled.Arrow />
                            }
                        </styled.Btn>
                    </styled.OptionDataDiv>
                    { isRotate["level"] && <styled.OptionDropDown />}
                </styled.OptionBox>

            </Box>
        </Container>
    )
}

export default Condition;