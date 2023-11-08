import styles from "./page.module.css";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.topName}>Andrew Mullins</div>
            <Nav />
            <div className={styles.mainDiv} id="about">
                <h2 className={styles.secHead}>About Me</h2>
                <div>
                    I am a software engineer based just outside of Washington, DC in Chevy Chase, MD. From my previous
                    work in neuroscience research, I have strong skills in problem solving, data manipulation, team
                    collaboration, and public speaking. I am most interested in developing engaging, intuitive, and
                    appealing front-end interfaces as well as creating clean and efficient back-end architectures.
                </div>
            </div>
            <div className={styles.mainDiv} id="projects">
                <h2 className={styles.secHead}>Projects</h2>
                <div className={styles.projGrid}>
                    <Projects />
                </div>
            </div>
            <div className={styles.mainDiv} id="contact">
                <h2 className={styles.secHead}>Contact Me</h2>
                <form action="https://formspree.io/f/xeqboryr" method="POST" className={styles.formStyle}>
                    <input type="email" name="email" className={styles.inputStyle} />
                    <div className={styles.contactDivStyle}>
                        <textarea name="message" className={styles.inputStyle}></textarea>
                        <button type="submit" className={styles.buttonStyle}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </main>
    );
}
