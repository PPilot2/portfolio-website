import Link from "next/link";
import styles from "../page.module.css";

export default function NotFoundContent() {
    return (
        <div className={styles.notFoundContainer}>
            <div>
                <h1>404 - Page Not Found</h1>
                <span>{'>o<'}</span>
                <h2><Link href="/">Return to Home</Link></h2>
            </div>
        </div>
    )
}