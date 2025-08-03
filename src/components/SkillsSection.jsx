    import reactLogo from "../assets/skills/react.webp";
    import tailwindLogo from "../assets/skills/tailwind.webp";
    import phpLogo from "../assets/skills/php.webp";
    import mysqlLogo from "../assets/skills/mysql.webp";
    import gitLogo from "../assets/skills/git.webp";
    import psLogo from "../assets/skills/ps.webp";
    import figmaLogo from "../assets/skills/figma.webp"
    import wordpress from "../assets/skills/wordpress.webp";
    import js from "../assets/skills/js.webp";
    import bootstrap from "../assets/skills/bootstrap.webp";
    import java from "../assets/skills/java.webp";

    const SkillsSection = () => {
    const skills = [
        { name: "JavaScript", logo: js },
        { name: "React", logo: reactLogo },
        { name: "WordPress", logo: wordpress },
        { name: "PHP", logo: phpLogo },
        { name: "Java", logo: java },
        { name: "MySQL", logo: mysqlLogo },
        { name: "Tailwind", logo: tailwindLogo },
        { name: "Bootstrap", logo: bootstrap },
        { name: "GitHub", logo: gitLogo },
        { name: "PhotoShop", logo: psLogo },        
        
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
