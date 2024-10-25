/**
 * -------------- LAYOUT ----------------
 * This component represents the general layout of the site, showing a navigation bar for all pages
 * The specific Routes are given as child components
 */

import Navbar from "../navbar/Navbar";

// CSS
import styles from "./Layout.module.css";

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}

export default Layout;
