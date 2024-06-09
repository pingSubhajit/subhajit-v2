import styles from '@/styles/Logo.module.scss'
import {cn} from '@/lib/utils'

const Logo = ({className}: {className?: string}) => {
	return (
		<div className={cn(styles.logo, 'text-beige', className)}>
			<p className={styles.copyright}>©</p>

			<div className={styles.name}>
				<p className={styles.codeBy}>Code by</p>
				<p className={styles.firstName}>Subhajit</p>
				<p className={styles.lastName}>Kundu</p>
			</div>
		</div>
	)
}

export default Logo
