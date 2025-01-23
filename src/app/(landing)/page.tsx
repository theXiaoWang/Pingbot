import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Check } from "lucide-react"
import { ShinyButton } from "@/components/shiny-button"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <Heading className="text-sm">
              <span>Real-Time SaaS Insights,</span>
              <br />
              <span>
                Right To your{" "}
                <span className="bg-gradient-to-r from-[#5865F2] to-[#404EED] text-transparent bg-clip-text">
                  Discord
                </span>
              </span>
            </Heading>
          </div>
          <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty mx-auto mt-10">
            PingBot is the easiest way to monitor your SaaS. Get instant
            notifications for{" "}
            <span className="font-semibold text-gray-700">
              sales, new users, or any other event
            </span>{" "}
            sent directly to your Discord
          </p>
          <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-center mx-auto mt-10">
            {[
              "Real-time Discord alerts for critical events",
              "Buy once, use forever",
              "Track sales, new users, or any other event",
            ].map((item, index) => (
              <li key={index} className="flex gap-1.5 items-center">
                <Check className="size-5 shrink-0 text-brand-700" />
                {item}
              </li>
            ))}
          </ul>
          <div className="w-full max-w-80 mx-auto mt-10">
            <ShinyButton>Start For Free Today</ShinyButton>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Pingbot Avatar"
                    username="PingBot"
                    timestamp="Today at 01:47PM"
                    badgeText="Sign Up"
                    badgeColor="#43b581"
                    title={`👤 New user signed up`}
                    content={{
                      name: "Luke Skywalker",
                      email: "starwars@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Pingbot Avatar"
                    username="PingBot"
                    timestamp="Today at 03:23 PM"
                    badgeText="Payment"
                    badgeColor="#faa61a"
                    title={`💰 A new payment received`}
                    content={{
                      amount: "$49.99",
                      email: "takemymoney@gmail.com",
                      plan: "PRO",
                    }}
                  />

                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Pingbot Avatar"
                    username="PingBot"
                    timestamp="Today at 04:05PM"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title={`🚀 Sales goal achieved`}
                    content={{
                      profit: "£10,000 GBP",
                      growth: "+7.5%",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section></section>
      <section></section>
    </>
  )
}

export default Page
