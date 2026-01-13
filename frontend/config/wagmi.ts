import { createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { cookieStorage, createStorage } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''
const baseRpc = process.env.NEXT_PUBLIC_BASE_RPC || 'https://mainnet.base.org'

export const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(baseRpc),
  },
  ssr: true,
  storage: createStorage({ storage: cookieStorage }),
  connectors: [
    injected({
      shimDisconnect: true,
    }),
    walletConnect({
      projectId,
      showQrModal: true,
      metadata: {
        name: 'ForgeX',
        description: 'ForgeX – multi-vault DeFi interface on Base',
        url: 'https://forgex.app',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
      },
    }),
  ],
})

export type WagmiConfig = typeof wagmiConfig
