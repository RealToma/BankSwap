import React, { useCallback, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import { CardFooter, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

export default function Dashboard({
  match: {
    params: { currencyIdA, currencyIdB },
  },
  history,
}: RouteComponentProps<{ currencyIdA?: string; currencyIdB?: string }>) {
  const { t } = useTranslation()
  const [toggle1, settoggle1] = useState(true)
  const [toggle2, settoggle2] = useState(false)
  const [toggle3, settoggle3] = useState(false)

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" width="100%">
        <Box
          display="flex"
          marginTop="40px"
          width="20%"
          bgcolor="white"
          borderRadius="30px"
          height="50px"
          alignItems="center"
        >
          <ToggleButton
            marginLeft="1%"
            onClick={() => {
              settoggle1(true)
              settoggle2(false)
              settoggle3(false)
            }}
            bgcolor={toggle1 ? 'rgb(204, 167, 154)' : 'white'}
            color={toggle1 ? 'white' : 'rgb(96, 96, 95)'}
          >
            My $BANK
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              settoggle1(false)
              settoggle2(true)
              settoggle3(false)
            }}
            bgcolor={toggle2 ? 'rgb(204, 167, 154)' : 'white'}
            color={toggle2 ? 'white' : 'rgb(96, 96, 95)'}
          >
            My Farms
          </ToggleButton>
          <ToggleButton
            marginRight="1%"
            onClick={() => {
              settoggle1(false)
              settoggle2(false)
              settoggle3(true)
            }}
            bgcolor={toggle3 ? 'rgb(204, 167, 154)' : 'white'}
            color={toggle3 ? 'white' : 'rgb(96, 96, 95)'}
          >
            My Pools
          </ToggleButton>
        </Box>
        <Box display="flex" marginTop="40px" width="80%">
          <Box display="flex" flex="1" width="100%" flexDirection="column" alignItems="center">
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                Trading Volume ( last 24h )
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                $0.00
              </Box>
            </Box>
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                Circulating Supply
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                0 $BANK
              </Box>
            </Box>
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                Current USDC Rewards Pool
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                0.00 $USDC
              </Box>
            </Box>
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                Upcoming USDC Rewards
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                0.00 $USDC
              </Box>
            </Box>
          </Box>
          <Box display="flex" flex="1" width="100%" flexDirection="column" alignItems="center">
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                $BANK price
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                $0.00
              </Box>
            </Box>
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                Market Cap
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                $0.00
              </Box>
            </Box>
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                Total Rewards Distributed
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                0.00 $USDC
              </Box>
            </Box>
            <Box
              display="flex"
              marginTop="20px"
              bgcolor="rgb(204, 167, 154)"
              borderRadius="24px"
              width="80%"
              height="80px"
              color="white"
            >
              <Box display="flex" fontSize="16px" fontWeight="600" flex="1" marginLeft="50px" alignItems="center">
                My Total USDC Rewards
              </Box>
              <Box
                display="flex"
                fontSize="20px"
                fontWeight="600"
                flex="1"
                marginRight="50px"
                alignItems="center"
                justifyContent="flex-end"
              >
                0.00 $USDC
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" marginTop="40px" width="10%" justifyContent="center">
          <Button
            width="100%"
            height="60px"
            style={{
              background: 'white',
              color: 'rgb(204, 167, 154)',
            }}
          >
            {t('Claim Reward')}
          </Button>
        </Box>
      </Box>
    </>
  )
}

const ToggleButton = styled(Box)`
  display: flex;
  flex: 1;
  height: 45px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 70%;
    transition: 0.5s;
  }
`
