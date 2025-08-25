import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Keza",
  link: "https://keza.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-keza",
  tags: [
    "PWA",
    "Crypto Wallets",
    "Offline-First",
    "EVM",
    "Solana",
    "TON",
    "Mnemonic",
  ],
  description:
    "Offline PWA for generating EVM, Solana, TON wallets and 12/24-word mnemonics with multi-format export.",

  metaTitle: "Keza - Offline Crypto Wallet Generator PWA by Sadiq Salau",
  metaDescription:
    "Keza is an offline PWA for generating Bitcoin, EVM, Solana, and TON wallets with secure 12/24-word mnemonics. Supports multi-format exports including JSON, TXT, CSV, and XLS.",
  keywords: [
    "Keza Wallet Generator",
    "Offline Crypto Wallet PWA",
    "EVM Wallet Generator",
    "Solana Wallet Generator",
    "TON Wallet Generator",
    "Mnemonic Generator App",
    "Sadiq Salau Projects",
  ],
  overview: () => (
    <>
      <p>
        Keza is a fully offline Progressive Web App for generating multiple
        crypto wallets — including EVM, Solana, and TON—along with secure 12- or
        24-word mnemonics.
      </p>

      <p>
        I built Keza out of <strong>personal necessity</strong>. I needed to
        create over 20 wallets 🤯 and wasn't about to go through that one-by-one
        on MetaMask or Phantom. With Keza, I could batch-generate, review, and
        export all at once — no Wallet extension required, no internet needed.
      </p>

      <p>
        It supports JSON, TXT, CSV, and XLS exports, making it ideal for
        generating wallets for example: savings, rent, spending, and more.
      </p>

      <p>
        It was built with <strong>React</strong>, <strong>TailwindCSS</strong>{" "}
        and Wallet SDKs like <strong>ethers.js</strong> and{" "}
        <strong>solana-web3.js</strong>.
      </p>
    </>
  ),
};

export default project;
