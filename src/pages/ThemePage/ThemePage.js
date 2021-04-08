import GoHawkImage from "../../media/GoHawk.png";
import "./ThemePage.css";

const ThemePage = ({ removeBirds, children }) => {
	/*
	<div className="center">
		<div className="div1">
			<div className="div2 sc2">{children}</div>
		</div>
	</div>
	*/
	return (
		<>
			<header>
				<h1>Matrix Calculator</h1>
			</header>
			<div id="bar" />
			<div id="inside">{children}</div>
			{removeBirds || <img id="leftImage" alt="" src={GoHawkImage} />}
			{removeBirds || <img id="rightImage" alt="" src={GoHawkImage} />}
			<footer>
				<p className="authors">
					M
					<a
						id="rickRoll"
						tabIndex="-1"
						rel="noreferrer noopener"
						target="_blank"
						href="https://youtu.be/fQGbXmkSArs"
					>
						a
					</a>
					de By:{" "}
					<a
						href="mailto:wyattspree@gmail.com"
						rel="noreferrer noopener"
						tabIndex="-1"
						target="_blank"
					>
						Wyatt Spree
					</a>
					{" & "}
					<a
						href="mailto:gaston95g@gmail.com"
						tabIndex="-1"
						rel="noreferrer noopener"
						target="_blank"
					>
						Gaston Gonnerman
					</a>
				</p>
			</footer>
		</>
	);
};

export default ThemePage;
