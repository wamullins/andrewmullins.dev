import styles from "../app/page.module.css";

export const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <div className={styles.footerLinks}>
                <a href="https://www.linkedin.com/in/w-andrew-mullins/" target="_blank">
                    <img src="https://static-00.iconduck.com/assets.00/linkedin-with-circle-icon-2048x2048-np6yltn1.png" />
                </a>
                <a href="https://github.com/wamullins" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                </a>
            </div>
        </div>
    );
};
