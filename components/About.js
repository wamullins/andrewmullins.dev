import styles from "../app/page.module.css";

export const About = () => {
    return (
        <div className={styles.about} id="about">
            <img className={styles.profilePic} src="/profile_picture_sq.png" width="256" height="256" />
            <div className={styles.aboutText}>
                <div className={styles.sectionHead}>About Me</div>
                <div className={styles.bioText}>
                    I am a software engineer based just outside of Washington, DC in Chevy Chase, MD. From my previous
                    work in neuroscience research, I have strong skills in problem solving, data manipulation, team
                    collaboration, and public speaking. I am most interested in developing engaging, intuitive, and
                    appealing front-end interfaces as well as creating clean and efficient back-end architectures.
                </div>
                <div className={styles.aboutLinks}>
                    <a className={styles.genText} href="https://www.linkedin.com/in/w-andrew-mullins/" target="_blank">
                        LinkedIn
                    </a>
                    <a className={styles.genText} href="https://github.com/wamullins" target="_blank">
                        GitHub
                    </a>
                    <a className={styles.genText} href="/Mullins_Resume_11_2023.pdf" target="_blank">
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};
