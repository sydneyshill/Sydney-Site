import Image from "next/image";
import Experience from "./experience";
import Education from "./education";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col space-y-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl items-left justify-items-left font-[family-name:var(--font-playwrite-cz)]">Sydney Shillinglaw</h1>
      <div className="items-center justify-items-center text-lg" >
        <p> 
        Hello world! I am a software developer who enjoys solving all sort of problems, primarily related to backend development.
        My favorite language is Python, but I'm always trying to hone my skills, and have used Java, C, C++, SQL, and TypeScript throughout
        my career.
        </p>
      </div>
      <Experience></Experience>
      <Education></Education>
    </div>

  );
}
