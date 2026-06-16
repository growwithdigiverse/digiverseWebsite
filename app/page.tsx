import Image from "next/image";
import {
  Smartphone,
  TrendingUp,
  Monitor,
} from "lucide-react";
import FadeIn from "./components/fadeIn";
export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-center px-4">

        <div className="flex items-center gap-4 sm:gap-8 px-4 sm:px-6 md:px-12 py-2 rounded-full bg-white/50 backdrop-blur-md shadow-lg max-w-full overflow-x-auto">

          {/* Logo */}
          <Image
            src="/LogoWithBG.PNG"
            alt="DigiVerse Logo"
            width={60}
            height={60}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] flex-shrink-0"
          />

          {/* Navigation */}
          <div className="flex gap-3 sm:gap-5 md:gap-8 text-gray-700 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">

            <a
              href="#home"
              className="hover:text-[#4D6BB3] hover:scale-105 transition duration-300"      >
              Home
            </a>

            <a
              href="#services"
              className="hover:text-[#4D6BB3] hover:scale-105 transition duration-300"
            >
              Services
            </a>

            <a
              href="#about"
              className="hover:text-[#4D6BB3] hover:scale-105 transition duration-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:text-[#4D6BB3] hover:scale-105 transition duration-300"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* CTA Section */}
      <FadeIn>
        <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

          <div className="bg-gradient-to-r from-[#4BB5E8] via-[#4D6BB3] to-[#7A3F97] rounded-2xl p-6 sm:p-8 text-white">

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

              <div>
                <p className="text-sm font-semibold tracking-wide mb-1">
                  READY TO GROW?
                </p>

                <h2 className="text-xl sm:text-2xl font-bold">
                  Let's Take Your Business To The Next Level
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

                <button className="bg-white text-[#4D6BB3] px-5 py-2 rounded-lg font-semibold hover:scale-105 transition w-full sm:w-auto">
                  Download Details
                </button>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=growwithdigiverse@gmail.com&su=Inquiry%20from%20DigiVerse%20Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8CC84B] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block text-center w-full sm:w-auto"
                >
                  Email Us
                </a>

              </div>

            </div>

          </div>

        </section>
      </FadeIn>
      {/* Hero Section */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-16 sm:pb-24">

          <p className="text-[#4D6BB3] font-semibold mb-4">
          The Digital Marketing Agency - Bengaluru
        </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">

            <span className="bg-gradient-to-r from-[#4BB5E8] via-[#4D6BB3] to-[#7A3F97] bg-clip-text text-transparent">
              We Drive Real Growth
            </span>

            <br />

            For Your Business

          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mb-8">
            Growth is a journey, not a destination. At DigiVerse, 
            we partner with businesses to navigate the ever-evolving 
            digital landscape, combining creativity, data, and continuous 
            learning to create measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button className="bg-[#4D6BB3] hover:bg-[#7A3F97] text-white px-8 py-4 rounded-xl transition w-full sm:w-auto">
              Know More About Us
            </button>

            <button className="border-2 border-[#4D6BB3] px-8 py-4 rounded-xl hover:bg-[#F2FAFE] transition w-full sm:w-auto">
              Industries We Serve
            </button>

          </div>

        </section>
      </FadeIn>
      {/* Stats
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-16">

          <div className="grid grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold text-[#4BB5E8]">
                50+
              </h2>
              <p className="text-gray-600">
                Successful Campaigns
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#7A3F97]">
                10+
              </h2>
              <p className="text-gray-600">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#8CC84B]">
                3+
              </h2>
              <p className="text-gray-600">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#4D6BB3]">
                100%
              </h2>
              <p className="text-gray-600">
                Client Satisfaction
              </p>
            </div>

          </div>

        </section>
      </FadeIn> */}
      {/* Services section */}
      <FadeIn>
        <section
          id="services"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 bg-[#FAFBFD]"
        >

          <p className="text-center text-[#4D6BB3] font-semibold mb-2">
            OUR SERVICES
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            Solutions That Drive Growth
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#4BB5E8] transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#F2FAFE] flex items-center justify-center mb-6">
                <Smartphone
                  size={32}
                  className="text-[#4BB5E8]"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Social Media Management
              </h3>

              <p className="text-gray-600">
                Build your brand, engage your audience,
                and grow your presence across all major
                platforms.
              </p>
              {/* <div className="mt-6 text-[#4D6BB3] font-semibold">
                Learn More →
              </div> */}
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#7A3F97] transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#F7F1FB] flex items-center justify-center mb-6">
                <TrendingUp
                  size={32}
                  className="text-[#7A3F97]"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Performance Marketing
              </h3>

              <p className="text-gray-600">
                Targeted campaigns that bring high-quality
                leads and maximize your return on investment.
              </p>
              {/* <div className="mt-6 text-[#4D6BB3] font-semibold">
                Learn More →
              </div> */}
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CC84B] transition duration-300 sm:col-span-2 md:col-span-1">

              <div className="w-16 h-16 rounded-2xl bg-[#F6FCEB] flex items-center justify-center mb-6">
                <Monitor
                  size={32}
                  className="text-[#8CC84B]"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Website Development
              </h3>

              <p className="text-gray-600">
                Modern, responsive websites designed to
                convert visitors into customers.
              </p>
              {/* <div className="mt-6 text-[#4D6BB3] font-semibold">
                Learn More →
              </div> */}
            </div>

          </div>

        </section>
      </FadeIn>
      {/* Why DigiVerse */}
      <FadeIn>
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

          <p className="text-center text-[#4D6BB3] font-semibold mb-2">
            WHY DIGIVERSE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            Why Businesses Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

            <div className="bg-[#F2FAFE] rounded-2xl p-6 sm:p-8">

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Data-Driven Strategy
              </h3>

              <p className="text-gray-600">
                Every decision is backed by analytics and measurable insights.
              </p>

            </div>

            <div className="bg-[#F7F1FB] rounded-2xl p-6 sm:p-8">

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Transparent Reporting
              </h3>

              <p className="text-gray-600">
                Clear updates and performance reports without the jargon.
              </p>

            </div>

            <div className="bg-[#F6FCEB] rounded-2xl p-6 sm:p-8 sm:col-span-2 md:col-span-1">

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Growth Focused
              </h3>

              <p className="text-gray-600">
                Our goal is simple: help your business grow sustainably.
              </p>

            </div>

          </div>

        </section>
      </FadeIn>
      {/* process section */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 bg-white">

          <p className="text-center text-[#4D6BB3] font-semibold mb-2">
            OUR PROCESS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            How We Help Your Business Grow
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2FAFE] flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#4BB5E8]">
                1
              </div>

              <h3 className="font-semibold text-xl mb-2">
                Discovery
              </h3>

              <p className="text-gray-600">
                Understanding your business, goals and audience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#F7F1FB] flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#7A3F97]">
                2
              </div>

              <h3 className="font-semibold text-xl mb-2">
                Strategy
              </h3>

              <p className="text-gray-600">
                Creating a customized growth roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#F6FCEB] flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#8CC84B]">
                3
              </div>

              <h3 className="font-semibold text-xl mb-2">
                Execution
              </h3>

              <p className="text-gray-600">
                Launching campaigns and implementing solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2FAFE] flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#4D6BB3]">
                4
              </div>

              <h3 className="font-semibold text-xl mb-2">
                Growth
              </h3>

              <p className="text-gray-600">
                Tracking performance and scaling results.
              </p>
            </div>

          </div>

        </section>
      </FadeIn>
      {/* clients results section */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 bg-[#FAFBFD]">

          <p className="text-center text-[#4D6BB3] font-semibold mb-2">
            RESULTS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#4BB5E8] via-[#7A3F97] to-[#8CC84B] mb-10"></div>
            Growth That Speaks For Itself
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

            <div className="rounded-2xl border p-6 sm:p-8 text-center hover:shadow-xl transition">

              <h3 className="text-4xl sm:text-5xl font-bold text-[#4BB5E8] mb-4">
                +245%
              </h3>

              <p className="font-semibold mb-2">
                Increased Reach
              </p>

              <p className="text-gray-600">
                Through strategic content planning and audience targeting.
              </p>

            </div>

            <div className="rounded-2xl border p-6 sm:p-8 text-center hover:shadow-xl transition">

              <h3 className="text-4xl sm:text-5xl font-bold text-[#7A3F97] mb-4">
                3X
              </h3>

              <p className="font-semibold mb-2">
                Lead Generation
              </p>

              <p className="text-gray-600">
                Optimized campaigns that brought qualified prospects.
              </p>

            </div>

            <div className="rounded-2xl border p-6 sm:p-8 text-center hover:shadow-xl transition sm:col-span-2 md:col-span-1">

              <h3 className="text-4xl sm:text-5xl font-bold text-[#8CC84B] mb-4">
                90%
              </h3>

              <p className="font-semibold mb-2">
                Client Retention
              </p>

              <p className="text-gray-600">
                Building long-term relationships through measurable results.
              </p>

            </div>

          </div>

        </section>
      </FadeIn>
      {/* CTA Section */}
      <FadeIn>
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

          <div className="bg-gradient-to-r from-[#4BB5E8] via-[#4D6BB3] to-[#7A3F97] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white">

            <p className="font-semibold mb-4 tracking-wide">
              READY TO GROW?
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let's Take Your Business To The Next Level
            </h2>

            <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Whether you're looking for more leads, stronger branding,
              or a high-converting website, DigiVerse is here to help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <button className="bg-white text-[#4D6BB3] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition w-full sm:w-auto">
                Download Details
              </button>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=growwithdigiverse@gmail.com&su=Inquiry%20from%20DigiVerse%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8CC84B] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block w-full sm:w-auto"
              >
                Email Us
              </a>

            </div>

          </div>

        </section>
      </FadeIn>

      <footer className="border-t mt-16 sm:mt-24">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4BB5E8] via-[#4D6BB3] via-[#7A3F97] to-[#8CC84B] bg-clip-text text-transparent">
                DigiVerse
              </h3>

              <p className="text-gray-500 mt-2">
                We All Grow Digitally
              </p>
            </div>

            <div className="text-left md:text-right text-gray-500">
              <p>Email: hello@digiverse.com</p>
              <p>© 2026 DigiVerse. All rights reserved.</p>
            </div>

          </div>

        </div>

      </footer>
      {/* <div className="fixed bottom-6 right-6 z-50 group flex items-center">

        <a
          href="https://wa.me/91YOURNUMBER"
          target="_blank"
          className="bg-[#8CC84B] text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
        >
          💬
        </a>

      </div> */}
    </main>
  );
}