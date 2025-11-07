import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Packer",
  link: "https://packer.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-packer",
  metaTitle: "Packer - Batch BSC Transactions with Built-in Hash Maker",
  metaDescription:
    "Packer is a PWA that enables users to batch process BSC transactions with multi-account support and a built-in hash generator.",
  keywords: ["Packer"],
  tags: ["PWA", "Cryptocurrency", "Offline-First"],
  description: "Batch BSC Transactions with Built-in Hash Maker.",
  overview: () => (
    <>
      <p>
        <strong>Packer</strong> is a powerful Progressive Web Application (PWA)
        designed for managing BSC (Binance Smart Chain) transactions with
        advanced features like batch processing, multi-account support, and
        built-in hash generation tool.
      </p>
      <p>
        Built with <strong>React</strong>, <strong>TailwindCSS</strong> and{" "}
        <strong>Ethers.js</strong>.
      </p>
    </>
  ),
};

export default project;
