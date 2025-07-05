    import reactLogo from "../assets/skills/react.webp";
    import tailwindLogo from "../assets/skills/tailwind.webp";
    import nodeLogo from "../assets/skills/node.webp";
    import phpLogo from "../assets/skills/php.webp";
    import mysqlLogo from "../assets/skills/mysql.webp";
    import gitLogo from "../assets/skills/git.webp";
    import psLogo from "../assets/skills/ps.webp";
    import exLogo from "../assets/skills/express.webp";
    import dbLogo from "../assets/skills/mongo.webp";
    import figmaLogo from "../assets/skills/figma.webp"

    const SkillsSection = () => {
    const skills = [
        { name: "React", logo: reactLogo },
        { name: "Tailwind", logo: tailwindLogo },
        { name: "Node.js", logo: nodeLogo },
        { name: "Mongo DB", logo: dbLogo },
        { name: "Express Js", logo: exLogo },
        { name: "PHP", logo: phpLogo },
        { name: "MySQL", logo: mysqlLogo },
        { name: "GitHub", logo: gitLogo },
        { name: "PhotoShop", logo: psLogo },
        { name: "Figma", logo: figmaLogo },
        
        
    ];

    return (
        <section className="bg-gray-50 py-20" id="skills">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-12">Skills<span className="text-black">.</span></h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
                <div
                key={index}
                className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-contain mb-3"
                />
                <p className="text-gray-800 font-medium">{skill.name}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default SkillsSection;
