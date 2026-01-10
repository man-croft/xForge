import { type Address } from 'viem'
import { type Config, getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { ethers } from 'ethers'

export function publicClientToProvider(config: Config) {
  const publicClient = getPublicClient(config)
  const { chain, transport } = publicClient
  return new ethers.JsonRpcProvider((transport as any).url, {
    name: chain?.name ?? 'Base',
    chainId: chain?.id ?? 8453,
  })
}

export async function walletClientToSigner(config: Config) {
  const walletClient = await getWalletClient(config)
  if (!walletClient) return undefined
  const { account, chain, transport } = walletClient
  const provider = new ethers.BrowserProvider((transport as any).value)
  const signer = await provider.getSigner()
  return { signer, account: account?.address as Address, chainId: chain?.id }
}

export function getConnectedAccount(config: Config) {
  return getAccount(config)
}
