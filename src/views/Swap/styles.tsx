import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;
  height: fit-content;
  margin : 0 auto;
  margin-bottom : 38px;
  width : 100%;
  max-width : 570px;
`

export const StyledInputCurrencyWrapper = styled(Box)`
  width : 100%;
`
