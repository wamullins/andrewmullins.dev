import projectsArr from "@/assets/projects.json";
import styles from "../app/page.module.css";

const Project = ({ title, image, description, technology, deployLink, repoLink }) => {
    const moreStyle = {
        overflowY: "scroll",
        maxHeight: "40%",
    };

    return (
        <div className={styles.projDiv}>
            <img src={image} width="200" height="200" />
            <div className={styles.projText}>
                <div className={styles.smallTitle}>{title}</div>
                <div className={styles.genText} style={moreStyle}>
                    {description}
                </div>
                <a href={repoLink} target="_blank" className={styles.genText}>
                    GitHub
                </a>
                <div className={styles.projPills}>
                    <Pills technology={technology} />
                </div>
            </div>
        </div>
    );
};

const Pills = ({ technology }) => {
    return technology.map((tech) => <div className={styles.projPills}>{tech}</div>);
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
