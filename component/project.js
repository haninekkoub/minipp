import styles from "../styles/project.module.scss";
import Image from "next/image";
//aray of projects

const projects = [
  {
    link: "https://qualdon.xyz/",
    title: "Qualdon.xyz",
    date: "March 9,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
    image: require("./project/qualdon.png")
  },
  {
    link: "/",
    title: "Qualdon",
    date: "March 9,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
    image: require("./project/project2.png")
  },
  {
    link: "/",
    title: "Qualdon",
    date: "March 9,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
    image: require("./project/project3.png")
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