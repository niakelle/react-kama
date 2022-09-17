import preloader from "../../../assets/loader.gif";
import styles from "./Preloader.module.css";

const Preloader = () => {
	return (
		<div>
			<img src={preloader} className={styles.preloaderGif}/>
		</div>
	)
}

export default Preloader;