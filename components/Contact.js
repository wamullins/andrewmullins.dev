import styles from "../app/page.module.css";

export const Contact = () => {
    const moreStyleEmail = {
        height: "30px",
        width: "130px",
    };
    const moreStyleMessage = {
        width: "100%",
        height: "100%",
    };

    return (
        <form action="https://formspree.io/f/xeqboryr" method="POST" className={styles.formStyle}>
            <div className={styles.genText} style={{ fontWeight: "600" }}>
                Email
            </div>
            <input
                type="email"
                id="email"
                className={styles.inputStyle}
                style={moreStyleEmail}
                placeholder="name@email.com"
            />
            <div className={styles.genText} style={{ fontWeight: "600" }}>
                Message
            </div>
            <textarea
                name="message"
                className={styles.inputStyle}
                style={moreStyleMessage}
                placeholder="Dear Andrew..."
            ></textarea>
            <button type="submit" className={styles.buttonStyle}>
                Send
            </button>
        </form>
    );
};
