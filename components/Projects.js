import projectsArr from "@/assets/projects.json";
import styles from "../app/page.module.css";

const Project = ({ title, image, description, technology, deployLink, repoLink }) => {
    return <div className={...styles.projDiv} style={{backgroundImage: {image}}}>
        {image}

        
        </div>;
};

export const Projects = () => {
    return projectsArr.map((proj) => (
            <Project
                key={proj.key}
                title={proj.title}
                image={proj.image}
                description={proj.description}
                technology={proj.technology}
                deployLink={proj.links.deploy}
                repoLink={proj.links.git}
            />
    ));
};
