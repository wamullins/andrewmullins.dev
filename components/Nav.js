import styles from "../app/page.module.css";
import Link from "next/link";

export const Nav = () => {
    return (
        <div className={styles.links}>
            <Link href="/">Top</Link>
            <Link href="/#about">About Me</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact me</Link>
        </div>
    );
};
