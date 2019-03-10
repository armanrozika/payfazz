import React, { Component } from 'react';
import icon from '../icon'

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="home__profile">
					<div className="home__photo">
						<img src="https://cdn.shopify.com/s/files/1/0774/6999/products/FP_PAP_000205_CHLK_ElectricTattooingMachine1929_WEB_SMALL_1378860f-ab3b-4d02-b907-af4c07ac2dc4_large.jpg?v=1519321057" className="chalkboard"/>
						<div className="round-photo">
							<img src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/bb/Tony_Stark_Promo.jpg/revision/latest?cb=20141129202546"/>
						</div>
					</div>
					<div className="home__name">
						<h4>Tony Stark</h4>
						<p>Tech Enthusiast</p>
					</div>
					<div className="home__name home__viewed">
						<h4>80</h4>
						<p>Who's viewed your profile</p>
					</div>
					<div className="home__name home__viewed">
						<h4>1,133</h4>
						<p>Connections</p>
						<h5>Manage your network</h5>
					</div>
					<div className="home__name">
						<p>Access exclusive tools & Insights</p>
						<h5 className="h5__list">Free Upgrade to Premium</h5>
					</div>
				</div>
				<div className="home__content">
					<div className="home__share">
						<p>Share an article, photo, video or idea</p>
						<div className="home__share-button">
							<div className="btn">
								<p>Write an article</p>
							</div>
							<div className="btn">
								{icon.photo}
								<p>Images</p>
							</div>
							<div className="btn">
								{icon.video}
								<p>Video</p>
							</div>
							<div className="post">
								<p>Post</p>
							</div>
						</div>
					</div>
					<div className="home__sort">
						<div className="sort-line"></div>
						<p>Sort by: <span>Top</span></p>
						<div className="triangle-big"></div>
					</div>
					<div className="home__feed">
						<div className="dots">
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="friend__avatar">
							<div className="avatar__wrap">
								<img src="http://unothegateway.com/wp-content/uploads/2017/04/Bruce_Wayne.jpg"/>
								<div>
									<h5>Bruce Wayne</h5>
									<p>Owner at Wayne Enterprises</p>
									<p>1d</p>
								</div>
								<div className="online-sign"></div>
							</div>
							<div className="friend__post">
								<img src="https://www.logolynx.com/images/logolynx/f2/f2fb98d4972eff9364988995e5434111.jpeg"/>
								<div className="friend__article">
									<h5>Wayne Enterprises is on the forefront of breakthrough technology that will change the world</h5>
									<p>wayne.enterprises</p>
								</div>
							</div>
							<p>1 Like</p>
							<div className="article__share">
								<div className="share__item">
									{icon.like}
									<p>Like</p>
								</div>
								<div className="share__item">
									{icon.comment}
									<p>Comment</p>
								</div>
								<div className="share__item">
									{icon.share}
									<p>Share</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="home__widget">
					<p>Add to your feed</p>
					<div className="add-feed-items">
						<img src="https://www.gannett-cdn.com/-mm-/51e30e00349d6f72262284dc0b87892012a4e819/c=1343-90-2398-883/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG?width=534&height=401&fit=crop"/>
						<div className="add-feed-title">
							<h5>Peter Parker</h5>
							<p>Photographer at Daily Bugle</p>
						</div>
						<div className="follow">
							<h5>+</h5>
							<h5>Follow</h5>
						</div>
					</div>
					<div className="add-feed-items">
						<img src="https://cdna.artstation.com/p/assets/images/images/014/020/568/large/brandon-davis-bugle-front-page.jpg?1542118701"/>
						<div className="add-feed-title">
							<h5>Daily Bugle</h5>
							<p>Newspaper <span>&#9679;</span> Media</p>
						</div>
						<div className="follow">
							<h5>+</h5>
							<h5>Follow</h5>
						</div>
					</div>
					<div className="add-feed-items">
						<img src="https://www.dailydot.com/wp-content/uploads/241/5f/16490714149de186.png"/>
						<div className="add-feed-title">
							<h5>Justice League</h5>
							<p>Topic</p>
						</div>
						<div className="follow">
							<h5>+</h5>
							<h5>Follow</h5>
						</div>
					</div>
					<h5>View all recommendations</h5>
				</div>
			</div>
		);
	}
}

export default Home;