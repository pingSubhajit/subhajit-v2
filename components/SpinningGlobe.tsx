import styles from '@/styles/SpinningGlobe.module.scss'

const SpinningGlobe = () => {
	return (
		<div className={styles.globe}>
			<div className={styles.globeWrap}>
				<div className={styles.circle}></div>
				<div className={styles.circle}></div>
				<div className={styles.circle}></div>
				<div className={styles.circleHor}></div>
				<div className={styles.circleHorMiddle}></div>
			</div>
		</div>
	)
}

export default SpinningGlobe
