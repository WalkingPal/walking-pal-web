import styles from "./ribbons.module.scss";

export const Ribbons = ({}) => {
	return (
		<div className={styles.main}>
			<div className={styles.strip1}>
                <div className={styles.stripC1}></div>
            </div>
			<div className={styles.strip2}></div>
			<div className={styles.strip3}></div>
			<div className={styles.strip4}></div>
		</div>
	);
};
