
export default function Experience() {
    return (
        <div className="flex flex-col space-y-3">
            <h1 className="text-4xl items-left justify-items-left font-[family-name:var(--font-playwrite-cz)]">
                Experience
            </h1>
            <div className="items-left justify-items-left font-[family-name:var(--font-geist-sans)]">
                <h2 className="text-2xl"> 
                    Clemson University: Energy Visualization and Analytics Center
                </h2>
                <p className="text-xl">
                    Data Engineer Intern
                    <br></br>
                    August 2021 - December 2021
                </p>
                <ul className="text-lg">
                    <li>Wrote Python scripts to maintain data pipelines</li>
                    <li>Analyzed building data to reduce carbon emissions</li>
                </ul>
            </div>
            <div className="items-left justify-items-left font-[family-name:var(--font-geist-sans)]">
                <h2 className="text-2xl">Comporium Communications</h2>
                <p className="text-xl">
                    Internet Support Specialist
                    <br></br>
                    October 2024 - Present
                </p>
                <ul className="text-lg">
                    <li>Answers inbound calls and chats from end users and troubleshoots their internet connection, email, and stream TV problems</li>
                    <li>Escalates issues to proper tiers</li>
                    <li>Document all interactions with end users in a ticketing system, detailing each troubleshooting step</li>
                </ul>
            </div>
        </div>
    )
}