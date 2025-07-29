import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Laravel OTP",
  link: "https://medium.com/@sadiqsalau/sending-and-verifying-otp-codes-in-laravel-the-easy-way-b946946bf467",
  repo: "https://github.com/sadiqsalau/laravel-otp",
  tags: ["PHP", "Laravel", "Composer", "Packagist"],
  description: "Clean Laravel package for sending and verifying OTP codes.",
  overview: () => (
    <>
      <p>
        <strong>Laravel OTP</strong> is a lightweight package I built for
        Laravel apps that need one-time password functionality.
      </p>

      <p>
        It uses class-based OTP definitions (like `UserRegistrationOtp`) so you
        can hook into custom logic through a `process()` method once
        verification succeeds.
      </p>

      <p>
        I also wrote a quick walkthrough on{" "}
        <HyperLink
          href="https://medium.com/@sadiqsalau/sending-and-verifying-otp-codes-in-laravel-the-easy-way-b946946bf467"
          target="_blank"
        >
          Medium
        </HyperLink>{" "}
        to show how it all ties together.
      </p>
    </>
  ),
} as Project;
