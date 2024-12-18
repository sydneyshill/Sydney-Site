export default function Education() {
    return (
        <div className="flex flex-col space-y-3">
            <h1 className="text-4xl items-left justify-items-left font-[family-name:var(--font-playwrite-cz)]">
                Education
            </h1>
            <div className="items-left justify-items-left font-[family-name:var(--font-geist-sans)]">
                <h2 className="text-2xl">Clemson University</h2>
                <p className="text-xl">
                B.S. Computer Science
                <br></br>
                Minor in Cybersecurity
                </p>
            </div>
            <div className="items-left justify-items-left font-[family-name:var(--font-geist-sans)]">
                <h2 className="text-2xl">CompTIA Security+</h2>
                <p className="text-xl">
                Received June 2024
                </p>
            </div>
        </div>
    )
}