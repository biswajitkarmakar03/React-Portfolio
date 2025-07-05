    import htmlLogo from "../assets/skills/html.png";
    import cssLogo from "../assets/skills/css.png";
    import jsLogo from "../assets/skills/js.png";
    import reactLogo from "../assets/skills/react.png";
    import tailwindLogo from "../assets/skills/tailwind.png";
    import nodeLogo from "../assets/skills/node.png";
    import phpLogo from "../assets/skills/php.png";
    import mysqlLogo from "../assets/skills/mysql.png";
    import gitLogo from "../assets/skills/git.png";
    import psLogo from "../assets/skills/ps.png";
    import exLogo from "../assets/skills/express.png";
    import dbLogo from "../assets/skills/mongo.png";
    import btLogo from "../assets/skills/bootstrap.png";
    import figmaLogo from "../assets/skills/figma.png"

    const SkillsSection = () => {
    const skills = [
        { name: "React", logo: reactLogo },
        { name: "Tailwind", logo: tailwindLogo },
        { name: "BootStrap", logo: btLogo },
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
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
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
