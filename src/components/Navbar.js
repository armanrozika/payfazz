import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import icon from '../icon'
import linkedinImg from '../icon/link.png'



class Navbar extends Component {
	state = {
		show: "show",
		showluv: "showluv",
		showafter: "hideafter",
		showsearch: "hidesearch",
		active: "active"
	}

	onFocus = ()=>{
		this.setState({
			show: "hide",
			showluv: "hideluv",
			showafter: "showafter",
			showsearch: "showsearch"
		})
	}

	onBlur = (e)=>{
		this.setState({
			show: "show",
			showluv: "showluv",
			showafter: "hideafter",
			showsearch: "hidesearch"
		})
	}

	mouseDown = ()=>{
		this.props.history.push('/profile')
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.location.pathname == '/profile'){
			this.setState({
				active: "notactive"
			})
		}else{
			this.setState({
				active: "active"
			})
		}
	}

	componentDidMount(){
		if(this.props.location.pathname == '/profile'){
			this.setState({
				active: "notactive"
			})
		}else{
			this.setState({
				active: "active"
			})
		}
	}

	render() {
		//console.log(this.props.location.pathname)
		return (
			<div className="navbar">
				<div className="navbar__grid">
					<div className="navbar__search">
						<img src={linkedinImg}/>
						<div className="form" onFocus={this.onFocus} onBlur={this.onBlur}>
							<div className={"search-icon " + this.state.showluv}>{icon.search}</div>
							<input className={this.state.show} type="text" placeholder="Search"/>
							<div className={"after-search "+ this.state.showafter}>{icon.search}</div>
							<div onMouseDown={this.mouseDown} className={"search__results " + this.state.showsearch}>
								<h4>Search for</h4>
								<div className="search__category">
									{icon.people}
									<h5>People</h5>
								</div>
								<div className="search__category">
									{icon.case}
									<h5>Jobs</h5>
								</div>
								<div className="search__category">
									{icon.message}
									<h5>Posts</h5>
								</div>
								<div className="clear-title">
									<h5>Recent</h5>
									<h5>Clear</h5>
								</div>
								
								<Link className="search-people" to="/profile">
									<img src="https://i.pinimg.com/originals/a4/66/9b/a4669be5cb05821d168691c3fa64c681.jpg"/>
									<h5>Clark Kent</h5>
								</Link>
								<Link className="search-people" to="/profile">
									<img src="https://static.tvtropes.org/pmwiki/pub/images/1_258_5.jpg"/>
									<h5>Barry Allen</h5>
								</Link>
								<Link className="search-people" to="/profile">
									<img src="http://digitalspyuk.cdnds.net/16/13/320x320/square-1459632762-benedict-cumberbatch-doctor-strange.jpg"/>
									<h5>Stephen Vincent Strange</h5>
								</Link>
								<Link className="search-people" to="/profile">
									<img src="https://pbs.twimg.com/profile_images/477206982437261312/jEEWk45I_400x400.jpeg"/>
									<h5>Bruce Banner</h5>
								</Link>
							</div>
						</div>
					</div>
					<div className="navbar__right">
						<div className={"menu-icon " + this.state.active}>
							{icon.home}
							<p>Home</p>
						</div>
						<div className="menu-icon">
							{icon.people}
							<p>My Network</p>
							<span>1</span>
						</div>
						<div className="menu-icon">
							{icon.case}
							<p>Jobs</p>
						</div>
						<div className="menu-icon">
							{icon.message}
							<p>Messaging</p>
						</div>
						<div className="menu-icon">
							{icon.bell}
							<p>Notifications</p>
							<span>4</span>
						</div>
						<div className="menu-icon border-right">
							<img src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/bb/Tony_Stark_Promo.jpg/revision/latest?cb=20141129202546" className="me"/>
							<p>Me</p>
							<div className="triangle"></div>
						</div>
						<div className="menu-icon">
							{icon.box}
							<p>Work</p>
							<div className="triangle"></div>
						</div>
						<div className="menu-icon">
							<div className="height-normal">Free Upgrade to Premium</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Navbar);