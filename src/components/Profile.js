import React, { Component } from 'react';
import icon from '../icon'

class Profile extends Component {
	render() {
		return (
			<div>
			<div className="profile">
				<div className="left__side">
					<div className="profile__left">
						<div className="image__cover">
							<img src="https://www.dailydot.com/wp-content/uploads/241/5f/16490714149de186.png"/>
							<img src="https://akns-images.eonline.com/eol_images/Entire_Site/2018630/rs_600x600-180730133438-600-jason-momoa-073018.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90"/>
						</div>
						<div className="profile__left-info">
							<div className="info__name">
								<h3>Joseph Arthur <span>&#9679; 2nd</span></h3>
								<h5>Laboratory Coordinator</h5>
								<p>America</p>
								<div className="profile__connect">
									<button>Connect</button>
									<button>InMail</button>
									<button>More...</button>
								</div>
							</div>
							<div className="info__history">
								<div className="history__flex">
									<img src="https://images-na.ssl-images-amazon.com/images/I/61gSyb3EGkL._SX258_BO1,204,203,200_.jpg"/>
									<h5>DC Comic Heroes</h5>
								</div>
								<div className="history__flex">
									<img src="https://www.dcuniverseonline.com/images/v4/global/fb-share.jpg?v=3073712053"/>
									<h5>DC Universe</h5>
								</div>
								<div className="history__flex">
									{icon.people}
									<p>500+ connections</p>
								</div>
							</div>
						</div>

						<p className="expl">The main DC Universe, as well as the alternate realities related to it, began as the first shared universe in comic books and were quickly adapted to other media such as film serials or radio dramas. In subsequent decades, the continuity between all of these media became increasingly complex with certain storylines</p>

						<h4 className="showmore">Show more</h4>
					</div>
					<div className="highlight">
						<h4>Highlights</h4>
						<div className="highlight__flex">
							<div>
								<div className="flex__img">
									<img src="https://static.tvtropes.org/pmwiki/pub/images/1_258_5.jpg"/>
									<img src="https://pbs.twimg.com/profile_images/477206982437261312/jEEWk45I_400x400.jpeg"/>
								</div>
								<div>
									<h5>85 Mutual Connections</h5>
									<p>You and Joseph Both Know Michael Jackson, Adam Levine, James Brown, and 83 others.</p>
								</div>
							</div>
							<div className="flex-two">
								{icon.message}
								<div>
									<h5>Reach out to Joseph for...</h5>
									<p>Joining a non profit</p>
								</div>
							</div>
						</div>
						<h4 className="showmore">Show more</h4>
					</div>

					<div className="activity">
						<button>+ Follow</button>
						<h4>Joseph's Activity</h4>
						<p>1,115 followers</p>
						<div className="activity__share">
							<img src="https://akns-images.eonline.com/eol_images/Entire_Site/2018630/rs_600x600-180730133438-600-jason-momoa-073018.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90"/>
							<div>
								<p>I’m no leader. I came because I had no choice. I came to save my home, and the people that I love.</p>
								<span>Joseph share this</span>
							</div>
						</div>
						<h4 className="showmore more-act">See all activity</h4>
					</div>

					<div className="experience">
						<div className="experience__top">
							<h4>Experience</h4>
							<div className="experience__lab">
								<div className="exbox"></div>
								<div className="exdetail">
									<h4>Lab coordinator</h4>
									<h5>DC Universe Hero</h5>
									<p>Sep 2015 - Present . 2 yrs 9 mos</p>
									<p>FX DC</p>
									<p>Lab Coordinator at DC Universe</p>
									<p>Lab Coordinator at DC Universe</p>
									<ul>Responsibility:
										<li>- Manage activity at DC Universe</li>
										<li>- Manage activity at DC Universe</li>
										<li>- Manage activity at DC Universe</li>
										<li>- Manage activity at DC Universe</li>
									</ul>
								</div>
							</div>
							<h4 className="showmore more-act">Show more</h4>
						</div>

						<div className="experience__education">
							<h4>Education</h4>
							<div className="experience__lab">
								<div className="bluebox"></div>
								<div className="exdetail">
									<h4>Universitas DC Comic</h4>
									<p>Magister Ilmu Biologi, Biological Science, 4.00</p>
								</div>
							</div>
							<div className="experience__lab">
								<div className="bluebox"></div>
								<div className="exdetail">
									<h4>Universitas DC Comic</h4>
									<p>Sarjana Ilmu Biologi, Biological Science, 4.00</p>
								</div>
							</div>
						</div>

						<div className="experience__education nobord">
							<h4>Volunteer</h4>
							<div className="experience__lab">
								<div className="exbox"></div>
								<div className="exdetail">
									<h4>Universitas DC Comic</h4>
									<p>PT. Lautan</p>
								</div>
							</div>
						</div>
					</div>

					<div className="acomp">
						<h4>Accomplishments</h4>
						<div className="experience__lab">
							<h2>5</h2>
							<div className="exdetail">
								<h4>Courses</h4>
								<p>How to swim</p>
							</div>
						</div>
					</div>

					<div className="interest">
						<h4>Interests</h4>
						<div className="intgrid">
							<div>
								<div className="circbox"></div>
								<div>
									<h5>Rakuten</h5>
									<p>100 followers</p>
								</div>
							</div>
							<div>
								<div className="circbox"></div>
								<div>
									<h5>Rakuten</h5>
									<p>100 followers</p>
								</div>
							</div>
							<div>
								<div className="circbox"></div>
								<div>
									<h5>Rakuten</h5>
									<p>100 followers</p>
								</div>
							</div>
							<div>
								<div className="circbox"></div>
								<div>
									<h5>Rakuten</h5>
									<p>100 followers</p>
								</div>
							</div>
							<div>
								<div className="circbox"></div>
								<div>
									<h5>Rakuten</h5>
									<p>100 followers</p>
								</div>
							</div>
							<div>
								<div className="circbox"></div>
								<div>
									<h5>Rakuten</h5>
									<p>100 followers</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="rightside">
					<h4>People also viewed</h4>
					<div className="rightflex">
						<div className="greycirc"></div>
						<div className="inf">
							<h5>Someone</h5>
							<p>Some Info</p>
						</div>
					</div>
					<div className="rightflex">
						<div className="greycirc"></div>
						<div className="inf">
							<h5>Someone</h5>
							<p>Some Info</p>
						</div>
					</div>
					<div className="rightflex">
						<div className="greycirc"></div>
						<div className="inf">
							<h5>Someone</h5>
							<p>Some Info</p>
						</div>
					</div>
					<div className="rightflex">
						<div className="greycirc"></div>
						<div className="inf">
							<h5>Someone</h5>
							<p>Some Info</p>
						</div>
					</div>
				</div>

				
			</div>

			<footer>
				<div className="footer__wrap">
					<h3>Linkedin</h3>
					<div className="footer__grid">
						<div className="gridone">
							<p>lorem</p>
							<p>lorem</p>
							<p>lorem</p>
							<p>lorem</p>
							<p>lorem</p>
							<p>lorem</p>
							<p>lorem</p>
							<p>lorem</p>
							<p>lorem</p>
						</div>
						<div>
							<h3>Questions</h3>
							<h3>Manage Account</h3>
						</div>
						<div className="gridthree">
							<p>Select Language</p>
							<button>English</button>
						</div>
							<span>Linkedin corporation &copy; 2018</span>
					</div>
				</div>

			</footer>
			</div>
		);
	}
}

export default Profile;