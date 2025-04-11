import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

export const config = getDefaultConfig({
  appName: 'RainbowKit',
  projectId: process.env.REOWN_PROJECT_ID || "d712cf91059c2e3147ab873af7c56126",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
  ],
  ssr: true,
});