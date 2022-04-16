import React from 'react'
import { Currency, Pair } from '@pancakeswap/sdk'
import { Button, ChevronDownIcon, Text, useModal, Flex, Box } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'

import { RowBetween } from '../Layout/Row'
import { Input as NumericalInput } from './NumericalInput'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`
const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
  padding: 0 0.5rem;
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
`
const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: '20px';
  background-color: transparent;
  z-index: 1;
`
const Container = styled.div`
  border-radius: 20px;
  background-color: rgb(250, 243, 240);
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  return (
    <Box id={id}>

      <InputPanel>
        <Container>
          <Flex justifyContent='space-between' padding='1rem 1rem 0 1rem' alignItems='center'>
            <Box style={{ fontSize: '14px' }}>
              You Pay
            </Box>
            {account && (
              <Text onClick={onMax} color="black" fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
                {!hideBalance && !!currency
                  ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
                  : ' -'}
              </Text>
            )}
          </Flex>
          <LabelRow>
            <RowBetween>
              <NumericalInput
                className="token-amount-input"
                value={value}
                onUserInput={(val) => {
                  onUserInput(val)
                }}
              />
              <Flex alignItems='center' height='50px'>
                <InputRow selected={disableCurrencySelect}>
                  {account && currency && showMaxButton && label !== 'To' && (
                    <Button onClick={onMax} scale="xs" variant="secondary" style={{ border: 'none' }}>
                      MAX
                    </Button>
                  )}
                </InputRow>
                <CurrencySelectButton
                  className="open-currency-select-button"
                  selected={!!currency}
                  onClick={() => {
                    if (!disableCurrencySelect) {
                      onPresentCurrencyModal()
                    }
                  }}
                >
                  <Flex alignItems="center" justifyContent="space-between">
                    {pair ? (
                      <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
                    ) : currency ? (
                      <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
                    ) : null}
                    {pair ? (
                      <Text id="pair" color='black'>
                        {pair?.token0.symbol}:{pair?.token1.symbol}
                      </Text>
                    ) : (
                      <Text id="pair" color='black'>
                        {(currency && currency.symbol && currency.symbol.length > 20
                          ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                            currency.symbol.length - 5,
                            currency.symbol.length,
                          )}`
                          : currency?.symbol) || t('Select Token')}
                      </Text>
                    )}
                    {!disableCurrencySelect && <ChevronDownIcon color='black' />}
                  </Flex>
                </CurrencySelectButton>
              </Flex>

            </RowBetween>
          </LabelRow>

        </Container>
      </InputPanel>
    </Box>
  )
}
