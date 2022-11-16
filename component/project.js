import styles from "../styles/project.module.scss";
import Image from "next/image";
//aray of projects

const projects = [
  {
    link: "https://qualdon.xyz/",
    title: "Qualdon.xyz",
    date: "March 9,2022",
    hero: " A coming soon page for a agency portfolio ",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
    image: require("./project/qualdon.png")
  },
  {
    link: "https://quick-hani.vercel.app/",
    title: "Quick",
    date: "jun 12,2022",
    hero: " landing page for a creative agence",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
    image: require("./project/quick.png")
  },
  {
    link: "https://theportfolio-sigma.vercel.app/",
    title: "Portfolio V2 ( working in progress)",
    date: "sep 13,2022",
    hero: " New version of portfolio 'work-in-progress'",
    tech: [ 
        "scss",
        "nextjs",
        "tailwind",
        
    ],
    image: require("./project/v2.png")
  },
  {
    link: "",
    title: "Prime",
    date: "Coming soon",
    hero: " inspiration site for the prime hydratation",
    tech: [ 
      "Webflow",
    ],
    image: require("./project/prime.png")
  },

];

export default function Project() {
  return (
    <>
      {projects.map((project, i) => (
        <a href={project.link} key={i} className={styles.container}>
            <div className={styles.description}>
              <h1>{project.title}</h1>
              <p>{project.date}</p>
              <p>{project.hero}</p>
              <div className={styles.tech}>
                <h5>Tech</h5>
                <span className={styles.line}></span>
                <ul>
                {project.tech.map((tech) => (
                  <li>
                    <p>
                      <span>{tech}</span>
                    </p>
                  </li>
                  ))}

                </ul>
              </div>
            </div>
            <div >
              <Image
                src={project.image}
                alt="project picture"
                placeholder="blur"
                height={'200vh'}
                width= {'350vw'}
                className={styles.image}
              />
            </div>
        </a>
      ))}
    </>
  );
}
