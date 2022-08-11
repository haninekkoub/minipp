import styles from "../styles/project.module.scss";
import Image from 'next/image'
import Qualdon from '../assets/qualdon.png'
//aray of projects

const projects = [
  {
    title: "Qualdon",
    date: "March 9,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
  //  image:  "Qualdon",
  },
  {
    title: "Qualdon",
    date: "March 9,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
  //  image:  "Qualdon",
  },
  {
    title: "Qualdon",
    date: "March 9,2022",
    hero: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, diam sed nisi,",
    tech: [ 
        "scss",
        "nextjs",
        
    ],
  //  image:  "Qualdon",
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
          <Image
              src={Qualdon}
              alt="project picture"
              placeholder="blur"
              lassName={styles.image}
          />
        </div>
      ))}
    </>
  );
}
