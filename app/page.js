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
                <div className={styles.sectionHead}>My Projects</div>
                <Projects />
                <div className={styles.sectionHead}>Contact Me</div>
                <Contact />
            </main>
            <Footer />
        </>
    );
}
