import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Page() {
  return (
    <div className="flex h-[100vh]">
      <div className="w-1/2 bg-[#DFD3F2] flex h-full justify-center items-center">
        <Image width={600} height={450} src="/pick.jpg" alt="Placeholder" />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div>
          <div className="font-['Inter'] font-extrabold text-[#7625F6] text-5xl text-center mb-16">
            Near2You
          </div>

          <form className="gap-4" action="">

            <br />
            <input
              type="email"
              placeholder="Email"
              className="rounded-[12px] h-[45px] w-[29vw] border border-[#82858B] px-4 mb-4"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="rounded-[12px] h-[45px] w-[29vw] border border-[#82858B] px-4 mb-4"
            />

          </form>

          <button className=" font-['Inter'] h-[45px] w-[29vw] border border-[#82858B] text-white bg-[#7524f5] px-4 mb-4 transition-transform transform hover:scale-105 hover:bg-[#7625F6]">
            Login
          </button>

          <div className="flex items-center justify-center text-center">
            <div className="w-1/2 border-t border-[#DFD3F2]"></div>
            <span className="mx-2 text-[#00160A] text-[16px] font-medium font-['Inter']">OR</span>
            <div className="w-1/2 border-t border-[#DFD3F2]"></div>
          </div>

          <div className="items-center justify-center flex gap-3 mt-4 mb-4">
            <button className="font-['Inter'] rounded-[12px] h-[45px] w-[14vw] text-black border border-[#82858B] bg-white px-4 mb-4 flex text-[12px] font-bold items-center justify-center gap-4 transition-transform transform hover:scale-105 hover:bg-[#7524f5] hover:text-white">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <img className="w-6 h-6 object-cover rounded-full" src="/google.svg" alt="Google logo" />
              </div>
              Google
            </button>
            <button className="rounded-[12px] h-[45px] w-[14vw] text-black border border-[#82858B] bg-white px-4 mb-4 flex text-[12px] font-bold items-center justify-center gap-1 transition-transform transform hover:scale-105 hover:bg-[#7524f5] hover:text-white">
              <div className="font-['Inter'] w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <img className="w-6 h-6 object-cover rounded-full" src="/facebook.svg" alt="Facebook logo" />
              </div>
              Facebook
            </button>
          </div>



          <div className="text-center font-['Inter'] ">
            Create a new account?
            <Link href="/signup">
              <button className="underline hover:text-[#7625F6] font-['Inter'] ">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;