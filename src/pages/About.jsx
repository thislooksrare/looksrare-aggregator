import MainNavigation from "./nav/MainNavigation";
import TwitterLink from "../components/links/TwitterLink";
import DiscordLink from "../components/links/DiscordLink";

export default function About() {
  const style = {
    display: "inline",
  };

  return (
    <>
      <MainNavigation page={"about"} />
      <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-7 lg:gap-x-8 mb-8 lg:mb-0 px-5">
        <div className="col-span-5 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight mb-3">About</h2>
          <p className="mb-4 text-lg">
           LOOKS RARE
          </p>

          <p className="text-lg mb-8">
           we are a group of professional artists and web3 developers
           building the NFT world together with unique collections and 
           curated drops made for collectors
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight my-3">
            You want to join us?
          </h2>

          <p>
            we are here to help you getting started - book a session with katzenmalen:
            <a
              href="https://calendly.com/looksrare/30min"
              title="Book a 30m Session"
              className="underline"
            >
              here
            </a>
            .
          </p>

          <div className="mt-12">
            <TwitterLink url="https://twitter.com/thislooksrare" style={style} />
            <DiscordLink url="https://discord.gg/JUF7VeH499" style={style} />
          </div>
        </div>
      </div>
    </>
  );
}
