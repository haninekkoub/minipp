import Image from "next/image";
import styles from "../styles/project.module.scss";

//aray of projects

const projects = [
  {
    title: "Project Title 1",
    date: "March 9,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
        "react",
    ],
    image: "https://source.unsplash.com/random",
  },

  {
    title: "Project Title 2",
    date: "March 7,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
    ],

    image: "https://source.unsplash.com/random",
  },
  
  {
    title: "Project Title 2",
    date: "March 7,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
    ],

    image: "https://source.unsplash.com/random",
  },

];

export default function Project() {
  return (
    <>
      {projects.map((project, i) => (
        <div key={i} className={styles.container}>
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
          <img className={styles.image} src={project.image} alt="Picture of project" />
        </div>
      ))}
    </>
  );
}
