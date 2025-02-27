import { ArrowUpRight, Share2, ArrowDown, MapPin } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-16 py-5 flex items-center justify-between border-b border-gray-200">
        {/* Logo - Kept at Left */}
        <div className="flex items-center gap-3">
          <img src="/buildscouts-logo.svg" alt="BuildScouts" className="h-10" />
        </div>

        {/* Navigation Links - Moved More Towards Right */}
        <div className="flex flex-1 justify-end space-x-14 text-lg mr-10">
          <a href="#" className="text-gray-700 hover:text-black transition">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition">
            Contact Us
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition">
            Our Team
          </a>
          <a
            href="#"
            className="text-blue-700 font-medium hover:text-blue-800 transition"
          >
            Careers
          </a>
        </div>

        {/* Sign In Button - Adjusted Right */}
        <button className="ml-6 border border-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-100 transition">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-white">
        {/* Background Blurred Gradients */}
        <div className="absolute inset-0">
          {/* Massive Left Gradient */}
          <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-[#003F6B] opacity-30 blur-[220px] rounded-full"></div>

          {/* Massive Right Gradient */}
          <div className="absolute bottom-[-150px] right-[-100px] w-[700px] h-[700px] bg-[#003F6B] opacity-40 blur-[250px] rounded-full"></div>
        </div>

        {/* Content - Increased Width & Shifted Left */}
        <div className="relative max-w-5xl ml-12">
          {" "}
          {/* Changed max-w-4xl → max-w-5xl for a larger width */}
          <p className="text-gray-700 mb-4 font-afacad text-lg">Careers</p>
          <h1 className="text-5xl font-light mb-6">
            Join the BuildScouts Journey!
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            {" "}
            {/* Increased max-w-2xl → max-w-3xl */}
            We&apos;re seeking experienced architects, interior designers, and
            developers with a strong portfolio and 5+ years in the field. Ideal
            candidates are skilled, detail-oriented, and passionate about
            delivering high-quality, client-focused projects.
          </p>
        </div>

        {/* Centered Arrow Button */}
        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2">
          <button className="rounded-full p-4 border border-gray-300 hover:bg-gray-50 transition">
            <ArrowDown className="w-6 h-6 align-middle" />
          </button>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-12">Our Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Freelance Architect (Highlighted) */}
            <div className="bg-[#F5F5F5] rounded-3xl p-8 shadow-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    Freelance Architect
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Bangalore, India</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-light mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Design custom home layouts, create detailed plans.</li>
                    <li>
                      Ensure project adherence to design standards and client
                      preferences.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-light mb-2">Qualifications</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>
                      Minimum of 1 year of experience in residential
                      architecture.
                    </li>
                    <li>
                      Proficiency in design software (e.g., AutoCAD, Revit).
                    </li>
                    <li>Strong creative and technical skills.</li>
                  </ul>
                </div>
              </div>

              {/* Apply Button */}
              <button className="mt-8 flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition">
                Apply now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Freelance Interior Designer */}
            <div className="bg-[#F5F5F5] rounded-3xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    Freelance Interior Designer
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Bangalore, India</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-light mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>
                      Develop interior concepts, choose materials and finishes.
                    </li>
                    <li>
                      Manage the design process to meet both aesthetic and
                      functional goals.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-light mb-2">Qualifications</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Minimum of 1 year of experience in interior design.</li>
                    <li>
                      Excellent knowledge of design principles and experience
                      with 3D visualization software.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Apply Button */}
              <button className="mt-8 flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition">
                Apply now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Freelance Developer (Construction) */}
            <div className="bg-[#F5F5F5] rounded-3xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    Freelance Developer (Construction)
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Bangalore, India</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-light mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Oversee project implementation.</li>
                    <li>Ensure build quality.</li>
                    <li>
                      Collaborate with architects and interior designers to
                      realize the final vision.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-light mb-2">Qualifications</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>
                      At least 1 year of experience in construction project
                      management.
                    </li>
                    <li>Familiarity with residential development processes.</li>
                    <li>Ability to coordinate across teams.</li>
                  </ul>
                </div>
              </div>

              {/* Apply Button */}
              <button className="mt-8 flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition">
                Apply now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-7 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading with underline */}
          <h2 className="text-3xl font mb-12">Why Join BuildScouts?</h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Work on Diverse Projects */}
            <div className="text-center p-8 border-1 border-black rounded-full w-80 h-80 flex flex-col items-center justify-center mx-auto">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6">
                <img src="/Vector.svg" width={117} height={121} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Work on Diverse Projects
              </h3>
              <p className="text-gray-600">
                Be part of a variety of home-building projects and showcase your
                unique expertise.
              </p>
            </div>

            {/* Collaborative Culture */}
            <div className="text-center p-8 border-1 border-black rounded-full w-80 h-80 flex flex-col items-center justify-center mx-auto">
              <div className="w-24 h-24 rounded-full  flex items-center justify-center mx-auto mb-6">
                <img src="/Vector (1).svg" height={121} width={121} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Collaborative Culture
              </h3>
              <p className="text-gray-600">
                Join a community of creative, experienced professionals focused
                on building quality homes.
              </p>
            </div>

            {/* Flexible Engagements */}
            <div className="text-center p-8 border-1 border-black rounded-full w-80 h-80 flex flex-col items-center justify-center mx-auto">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/Group 72.svg" height={121} width={103} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Flexible Engagements
              </h3>
              <p className="text-gray-600">
                Take on projects that match your schedule and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-light">Join BuildScouts</h2>

              {/* Apply Button */}
              <button className="flex items-center gap-2 border border-black rounded-full px-5 py-2 hover:bg-gray-100 transition">
                Apply now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <img
            src="/Group 55.svg"
            className="mx-269 my-4"
            height={50}
            width={50}
          />

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-3xl p-10 shadow-lg relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-transparent opacity-40 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-light mb-6">
                  Are you ready to discuss?
                </h2>
                <button className="flex items-center gap-2 border border-black rounded-xl px-4 py-2 mb-4 hover:bg-gray-100 transition">
                  Get Started with{" "}
                  <span className="font-semibold italic text-blue-600">
                    Custom home building
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-sm text-gray-600">FAQ</p>
              </div>

              {/* Right Content */}
              <div className="flex flex-col gap-12 items-start md:items-start">
                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-light">Phone</p>
                  <p className="text-gray-700 font-light">91+ 9999999999</p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-light">Email</p>
                  <p className="text-gray-700 font-light">
                    buildscouts@gmail.com
                  </p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-light">Social Media</p>
                  <div className="flex gap-12">
                    <img
                      src="/Vector (2).svg"
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      alt="Instagram"
                    />
                    <img
                      src="/Group 23.svg"
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      alt="LinkedIn"
                    />
                    <img
                      src="/Vector (3).svg"
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      alt="Twitter"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="mt-16 text-black py-10 px-6">
          {/* Horizontal Line */}
          <hr className="border-t border-black mb-4" />

          <div className="flex justify-between items-center">
            {/* Left-aligned Copyright Text */}
            <p className="text-sm">
              &copy; 2025 BuildScouts. All rights reserved.
            </p>

            {/* Right-aligned Links */}
            <div className="flex gap-6 text-sm text-black">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
