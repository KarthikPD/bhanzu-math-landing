import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { useNumberAnimation } from "@/hooks/use-number-animation"

function AnimatedStat({ end, label }: { end: number; label: string }) {
  const animatedNumber = useNumberAnimation(end)
  return (
    <div>
      <div className="text-4xl font-bold">{animatedNumber}+</div>
      <div className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">{label}</div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <SiteHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 bg-[#F15D22] p-8 text-white rounded-l-[40px]">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="font-medium mb-8">
              At Bhanzu, we transform math education through dedicated teaching, innovative solutions, and comprehensive
              support. Our commitment to quality learning is reflected in these key impacts:
            </p>

            {/* Stats Circle */}
            <div className="flex justify-center mb-12 relative">
              <Image 
                src="/left-leaf.svg" 
                alt="Left Leaf Decoration" 
                width={50} 
                height={50} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[-200px]"
              />
              <div className="text-center z-10">
                <AnimatedStat end={40} label="Happy students & parents" />
              </div>
              <Image 
                src="/right-leaf.svg" 
                alt="Right Leaf Decoration" 
                width={50} 
                height={50} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[-200px]"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 text-center mb-8">
              <AnimatedStat end={3} label="Teaching Hours" />
              <AnimatedStat end={16} label="Nations" />
              <AnimatedStat end={40} label="Question Solved" />
            </div>

            {/* Years of Research */}
            <div className="flex items-center gap-4 bg-[#ff6b3d] p-4 rounded-xl">
              <Image 
                src="/research.png" 
                alt="Research Icon" 
                width={80} 
                height={80} 
                className="object-contain"
              />
              <div className="flex-1">
                <AnimatedStat end={6} label="Years Data Research" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-8 bg-[#F2EFED] rounded-r-[40px]">
            <h2 className="text-3xl font-bold mb-6">
              Book A <span className="text-[#F15D22]">FREE Math Class</span> For Your Child!
            </h2>

            <div className="flex items-center gap-2 text-gray-600 mb-6 font-medium">
              <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">⏰</div>
              <span>It usually take less than 90 Sec</span>
            </div>

            <form className="space-y-4">
              <div className="flex gap-4">
                <Select defaultValue="91">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">🇺🇸 +1 (US/Canada)</SelectItem>
                    <SelectItem value="44">🇬🇧 +44 (UK)</SelectItem>
                    <SelectItem value="91">🇮🇳 +91 (India)</SelectItem>
                    <SelectItem value="86">🇨🇳 +86 (China)</SelectItem>
                    <SelectItem value="81">🇯🇵 +81 (Japan)</SelectItem>
                    <SelectItem value="61">🇦🇺 +61 (Australia)</SelectItem>
                    <SelectItem value="49">🇩🇪 +49 (Germany)</SelectItem>
                    <SelectItem value="33">🇫🇷 +33 (France)</SelectItem>
                    <SelectItem value="7">🇷🇺 +7 (Russia)</SelectItem>
                    <SelectItem value="55">🇧🇷 +55 (Brazil)</SelectItem>
                    <SelectItem value="65">🇸🇬 +65 (Singapore)</SelectItem>
                    <SelectItem value="82">🇰🇷 +82 (South Korea)</SelectItem>
                    <SelectItem value="966">🇸🇦 +966 (Saudi Arabia)</SelectItem>
                    <SelectItem value="971">🇦🇪 +971 (UAE)</SelectItem>
                    <SelectItem value="27">🇿🇦 +27 (South Africa)</SelectItem>
                    <SelectItem value="234">🇳🇬 +234 (Nigeria)</SelectItem>
                    <SelectItem value="52">🇲🇽 +52 (Mexico)</SelectItem>
                    <SelectItem value="62">🇮🇩 +62 (Indonesia)</SelectItem>
                    <SelectItem value="63">🇵🇭 +63 (Philippines)</SelectItem>
                    <SelectItem value="966">🇸🇦 +966 (Saudi Arabia)</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Parent's Mobile Number *" className="flex-1" />
              </div>

              <Input placeholder="Parent's Email ID *" />
              <Input placeholder="Student Name *" />

              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Grade 1</SelectItem>
                    <SelectItem value="2">Grade 2</SelectItem>
                    <SelectItem value="3">Grade 3</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Why are you considering Bhanzu?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="improve">To improve math skills</SelectItem>
                    <SelectItem value="confidence">Build confidence</SelectItem>
                    <SelectItem value="grades">Better grades</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Switch id="whatsapp" />
                <label htmlFor="whatsapp" className="text-sm text-gray-600 font-medium">
                  Get OTP & updates on Whatsapp
                </label>
              </div>

              <Button className="w-full bg-[#F15D22] hover:bg-[#d95422] text-white rounded-full py-6">
                Book Free Class
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-8 bg-[#3C3731] text-white p-6 rounded-[40px] flex items-center justify-between relative overflow-hidden">
          <div className="flex-1 z-10 pl-3">
            <h3 className="text-2xl font-bold mb-4">Course By Neelakantha Bhanu, World's Fastest Human Calculator</h3>
            <div className="flex gap-8">
              <div className="flex items-center gap-2 font-medium">
                <Image 
                  src="/trophy.png" 
                  alt="World Records" 
                  width={48} 
                  height={48} 
                  className="text-yellow-400"
                />
                <span>4 World Records</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Image 
                  src="/certificate.png" 
                  alt="Limca Book of Records" 
                  width={48} 
                  height={48} 
                  className="text-yellow-400"
                />
                <span>50 Limca Book of Records</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Image 
                  src="/medal.png" 
                  alt="Gold Medallist" 
                  width={48} 
                  height={48} 
                  className="text-yellow-400"
                />
                <span>Gold Medallist MSO</span>
              </div>
            </div>
          </div>
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex items-center">
            <Image
              src="/Bhanu.png"
              alt="Neelakantha Bhanu"
              width={175}
              height={175}
              className="object-contain"
            />
            <Image
              src="/thunderbolt.png"
              alt="Thunderbolt"
              width={48}
              height={48}
              className="ml-4 object-contain"
            />
          </div>
        </div>
      </main>

      {/* Background Vector */}
      <Image 
        src="/Background vector.svg" 
        alt="Background Vector" 
        width={1200}  
        height={500}  
        priority
        className="fixed bottom-0 left-0 right-0 w-full max-w-full h-auto object-cover z-[-10] pointer-events-none"
      />
    </>
  )
}
