import HyperLink from "./HyperLink";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center text-center p-10">
      <p>
        <HyperLink
          target="_blank"
          href="https://github.com/sadiqsalau/sadiqsalau-portfolio"
        >
          Built
        </HyperLink>{" "}
        with ❤️ by Sadiq Salau
      </p>
    </footer>
  );
}
