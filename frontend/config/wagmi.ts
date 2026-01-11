import { createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { cookieStorage, createStorage } from 'wagmi'

export const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http('https://mainnet.base.org'),
  },
  ssr: true,
  storage: createStorage({ storage: cookieStorage }),
})

export type WagmiConfig = typeof wagmiConfig
