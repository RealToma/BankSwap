import { MenuItemsType, DropdownMenuItemType, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },

  {
    label: t('Dashboard'),
    href: '/dashboard',
    icon: 'Earn',
    items: [
     
    ],
  },

  {
    label: t('Vault'),
    href: '/vault',
    icon: 'Earn',
    items: [
      
    ],
  },

  {
    label: t('BankPad'),
    href: '/bankpad',
    icon: 'Earn',
    items: [
      
    ],
  },

]

export default config
