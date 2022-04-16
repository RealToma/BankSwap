import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box) <{ $isDark: boolean; $isExpanded: boolean }>`
  border: none;
  border-radius: 32px;
  width: 100%;
  padding-top: 8px;
  min-width : 360px;
  margin-bottom : 20px;
  background: white;
  border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '16px')};
  width: ${({ $isExpanded }) => ($isExpanded ? '100%' : '50%')};
  height: ${({ $isExpanded }) => ($isExpanded ? 'calc(100vh - 100px)' : '484px')};
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
