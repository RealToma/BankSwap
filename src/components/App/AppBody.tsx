import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 18px;
  width: 100%;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 50%) 0px 10px 50px -20px;
  background : transparent;
  padding : 0;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
