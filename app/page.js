import styles from "./page.module.css";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.topName}>Andrew Mullins</div>
                <About />
                <div id="projects">
                    <h2 className={styles.sectionHead}>My Projects</h2>
                    <div className={styles.projGrid}>
                        <Projects />
                    </div>
                </div>
                <div id="contact">
                    <h2 className={styles.sectionHead}>Contact Me</h2>
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}
