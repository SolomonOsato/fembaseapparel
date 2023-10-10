import Image from "next/image";

import Logo from "../../public/images/logo.svg";
import HeroMobile from "../../public/images/hero-mobile.jpg";
import HeroDesktop from "../../public/images/hero-desktop.jpg";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  return (
    <div className="grid place-items-center pb-64 md:grid-cols-2 md:h-screen">
      <div className="grid md:gap-8 md:px-64 md:pb-24 md:bg-desktop">
        <header className="p-8 md:px-0">
          <Image src={Logo} alt="Base Apparel logo" loading="lazy" />
        </header>
        <main className="text-red-desaturated bg-gradient-01 md:bg-none grid gap-20">
          <Image
            className="w-full md:hidden"
            src={HeroMobile}
            alt=""
            loading="lazy"
          />

          <section className="text-center md:text-left px-8 md:px-0 grid gap-4 md:gap-6">
            <h1 className="leading-[1] tracking-[0.25em] uppercase text-6xl">
              <div className="font-light">{"we're"}</div>
              <div className="font-semibold text-red-dark">coming</div>
              <div className="font-semibold text-red-dark">soon</div>
            </h1>
            <p>
              {
                "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."
              }
            </p>
			<EmailForm />
          </section>
        </main>
      </div>
      <Image
        className="hidden md:block"
        src={HeroDesktop}
        alt=""
        loading="lazy"
      />
    </div>
  );
}
