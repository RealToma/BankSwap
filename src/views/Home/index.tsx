import React from 'react'
import styled from 'styled-components'
import { Box, Text, Flex } from '@pancakeswap/uikit'

import { FaTwitter, FaTelegram, FaInstagram, FaGithub, FaDiscord, FaArrowRight } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs'
import { GrLanguage } from 'react-icons/gr'
import { Link } from 'react-router-dom'


import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'

const EnterSection = styled(Box)`
    background-image: url("/images/home/back1.png");
    background-size : 100% 100%;
    display : flex;
    justify-content : space-between;
    padding-left : 54px;
    @media screen and (max-width : 800px){
        >div:nth-child(2){
            display : none;
        }
        >div>div:nth-child(1){
            padding : 0px;
            max-width : 346px;
            font-size : 24px;
            text-align :center;
        }
        >div>div:nth-child(2){
            max-width : 300px;
            font-size : 12px;
            padding-top : 10px;
        }
        >div>div:nth-child(3){
            padding : 0px;
            display : none;
        }
        padding : 50px 0px 14px 0px;
        justify-content : center;
    }
`

const GoodTimesTitle = styled(Text)`
    font-family : 'Good Times';
`;

const HelvaticaText = styled(Text)`
    font-family : 'Helvetica';
    color : #7A6EAA;
`;

const Button = styled(Box) <{ type: string }>`
    display : flex;
    justify-content : center;
    align-items :center;
    color : ${({ type }) => (type === 'primary' ? 'white' : '#D0AF3D')};
    font-size : 20px;
    background : ${({ type }) => (type === 'primary' ? '#7645D9' : 'transparent')};
    border-radius : 10px;
    cursor : pointer;
    border: ${({ type }) => (type === 'primary' ? 'none' : ' 2px solid #D0AF3D')};
    transition : opacity 0.3s;
    :hover{
        opacity : 0.7;
    }
`;

const BridgeSection = styled(Box)`
    display : flex;
    flex-direction : column;
    align-items : center;
    background : #100C37;
    @media screen and (max-width : 800px){
        >div:nth-child(1){
            display : flex;
            >div:nth-child(1){
                width : 170px;  
            }
            >div:nth-child(2){
                width : 135px;  
            }
        }
        >div:nth-child(3){
            font-size : 20px;
            max-width : unset;
        }
        >div:nth-child(4){
            font-size : 12px;
            max-width : 365px;
        }
    }
`

const TokenSection = styled(Box)`
    background-image: url("/images/home/back2.png");
    padding:63px 40px 33px 141px;
    background-size : 100% 100%;
    @media screen and (max-width : 950px){
        padding-left : 40px;
    }
    @media screen and (max-width : 800px){
        padding-bottom : 60px;
        >div:nth-child(1){
            flex-direction : column;
            align-items : center;
        }
        >div:nth-child(2){
            display : none;
        }
        >div>div:nth-child(1){
            margin : 0;
            width : 100%;
        }
        >div>div:nth-child(2){
            margin-top : 20px;
            width : 90%;
        }
        >div>div:nth-child(3){
            display : unset!important;
        }
        >div>div:nth-child(4){
            display : flex!important;
        }
        >div>div>div:nth-child(1){
            max-width : unset;
            text-align : center;
        }
        >div>div>div:nth-child(2){
            font-size : 14px;
            max-width : unset;
            margin-top : 10px;
            text-align : center;
        }
        >div>div>div:nth-child(3){
            display : none;
        }
    }
`

const NumberPad = styled(Box)`
    padding-left : 17px;
    min-width : 130px;
    height : 60px;
    width : 22.5%;
    border-left : 1px solid #D7CAEC;
`;


const Tabs = styled(Box)`
    display : none;
    position : absolute;
    left : calc(50% - 120px);
    @media screen and (max-width : 800px){
        display : flex;
    }
`

const Home: React.FC = () => {

  return (
    <>
      <Box/>
    </>
  )
}

export default Home
