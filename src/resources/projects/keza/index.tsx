import type { Project } from "../../../types/project";

export default {
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
  overview: () => (
    <>
      <p>
        Keza is a fully offline Progressive Web App for generating multiple
        crypto wallets— including EVM, Solana, and TON—along with secure 12- or
        24-word mnemonics.
      </p>

      <p>
        I built Keza out of <strong>personal necessity</strong>. I needed to
        create over 20 wallets 🤯 and wasn't about to go through that one-by-one
        on MetaMask or Phantom. With Keza, I could batch-generate, review, and
        export all at once—no browser extension required, no internet needed.
      </p>

      <p>
        It supports JSON, TXT, CSV, and XLS exports, making it ideal for
        generating wallets for savings, rent, spending, and more—without
        compromising on privacy or efficiency.
      </p>
    </>
  ),
} as Project;
