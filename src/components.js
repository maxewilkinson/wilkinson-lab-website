class SiteHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header id="header" class="alt">
			<div class="logo">
				<a href="index.html"><strong>WILKINSON</strong> LAB</a>
			</div>
			<nav id="nav-menu">
				<a href="research.html">Research</a>
				<a href="news.html">News</a>
				<a href="team.html">Team</a>
				<a href="publications.html">Publications</a>
				<a href="movies.html">Movies</a>
				<a href="resources.html">Resources</a>
				<a href="team.html#join">Join!</a>
			</nav>
			<button id="menu-toggle" aria-label="Open Menu">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</header>`;
	}
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<section id="footer">
			<div class="titlefield">
				<h3 class="major">Get in touch</h3>
				<div class="row">
					<div class="col-6 col-md-4">
						<h4>Address</h4>
						<p>
							Max Wilkinson<br>
							430 E 67th Street, RRL-201A<br>
							Memorial Sloan Kettering Cancer Center<br>
							New York, NY 10065<br>
						</p>
					</div>
					<div class="col-6 col-md-4">
						<h4>Email</h4>
						<p> wilkinm ( at ) mskcc.org</p>
						<h4>Phone</h4>
						<p> +1 212-639-3112 </p>
					</div>
					<div class="col-6 col-md-4">
						<ul class="icons">
							<li><a href="https://github.com/maxewilkinson/" target="_blank"><i class="icon fas brands fa-github"></i> <span class="label">Github</span></a></li>
							<li><a href="https://bsky.app/profile/maxewilkinson.bsky.social" target="_blank"><i class="icon fas brands fa-bluesky"></i> <span class="label">BlueSky</span></a></li>
							<li><a href="https://scholar.google.com/citations?user=EijrlGsAAAAJ&hl=en" target="_blank"><i class="icon fas brands fa-google"></i> <span class="label">Google Scholar</span></a></li>
						</ul>
					</div>
				</div>
				<p>
					&copy; Max Wilkinson 2026. All rights reserved. Design based on: <a href="http://html5up.net/" target="_blank">HTML5 UP</a> and inspired by the <a href="https://www.haberkernlab.de/" target="_blank">Haberkern Lab</a>.
				</p>
			</div>
		</section>`;
	}
}
customElements.define('site-footer', SiteFooter);
