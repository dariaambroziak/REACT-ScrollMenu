
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
         Route,
         Link,
         IndexLink,
         IndexRoute,
         hashHistory
       } from 'react-router';
import { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';


/* ------ NAV Scroll to Sections ------ */
class SectionNav extends React.Component {
  componentDidMount() {
    scrollToComponent(this.Orange);
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
		var value = document.body.scrollTop;

		var orangeH = document.querySelector(".orange");
			orangeH = orangeH.offsetTop;

		var greenH = document.querySelector(".green");
			greenH = greenH.offsetTop -1;

		var redH = document.querySelector(".red");
			redH = redH.offsetTop -1;

		var blueH = document.querySelector(".blue");
			blueH = blueH.offsetTop -1;

		var pinkH = document.querySelector(".pink");
			pinkH = pinkH.offsetTop -1;

		var greyH = document.querySelector(".grey");
			greyH = greyH.offsetTop -1;

		var purpleH = document.querySelector(".purple");
			purpleH = purpleH.offsetTop -1;

    var blackH = document.querySelector(".black");
  		blackH = blackH.offsetTop -1;

      value > orangeH && value < greenH
				? document.querySelector(".orangeLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".orangeLi").style.backgroundColor = "white"
      value > greenH && value < redH
				? document.querySelector(".greenLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".greenLi").style.backgroundColor = "white"
			value > redH && value < blueH
				? document.querySelector(".redLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".redLi").style.backgroundColor = "white"
			value > blueH && value < pinkH
				? document.querySelector(".blueLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".blueLi").style.backgroundColor = "white"
			value > pinkH && value < greyH
				? document.querySelector(".pinkLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".pinkLi").style.backgroundColor = "white"
			value > greyH && value < purpleH
				? document.querySelector(".greyLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".greyLi").style.backgroundColor = "white"
			value > purpleH
				? document.querySelector(".purpleLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".purpleLi").style.backgroundColor = "white"
      value > blackH
        ? document.querySelector(".blackLi").style.backgroundColor = "#f7f7f7"
        : document.querySelector(".blackLi").style.backgroundColor = "white"
  }
  render() {
    return (
      <div>
        <div>
          <nav className='nav'>
            <ul className=' navList'>
              <li>
                 <IndexLink  to="/orange"
                 className='orangeLi decoration hover paddingTop'
                 onClick={() => scrollToComponent(this.Orange, {align: 'middle',ease:'inCirc',  duration: 1000})}>ORANGE</IndexLink>
              </li>
              <li>
								<IndexLink  to="/green"
								className='greenLi decoration hover paddingTop'
								onClick={() => scrollToComponent(this.Green, {align: 'middle',ease:'inCirc',  duration: 1000})}>GREEN</IndexLink>
							</li>
              <li>
								<IndexLink  to="/red"
								className='redLi decoration hover'
								onClick={() => scrollToComponent(this.Red, {align: 'middle', ease:'inCirc', duration: 1000})}>RED</IndexLink>
							</li>
              <li>
								<IndexLink  to="/blue"
								className='blueLi decoration hover'
								onClick={() => scrollToComponent(this.Blue, {align: 'middle', ease:'inCirc', duration: 1000})}>BLUE</IndexLink>
							</li>
              <li>
                <IndexLink  to="/grey"
                className='greyLi decoration hover'
                onClick={() => scrollToComponent(this.Grey, { align: 'middle',ease:'inCirc', duration: 1000})}>GREY</IndexLink>
              </li>
              <li>
								<IndexLink  to="/pink"
								className='pinkLi decoration hover'
								onClick={() => scrollToComponent(this.Pink, { align: 'middle',ease:'inCirc', duration: 1000})}>PINK</IndexLink>
							</li>
              <li>
								<IndexLink  to="/purple"
								className='purpleLi decoration hover'
								onClick={() => scrollToComponent(this.Purple, {align: 'middle',ease:'inCirc',  duration: 1000})}>PURPLE</IndexLink>
							</li>
              <li>
								<IndexLink  to="/black"
								className='blackLi decoration hover'
								onClick={() => scrollToComponent(this.Black, {align: 'middle',ease:'inCirc',  duration: 1000})}>BLACK</IndexLink>
							</li>
            </ul>
          </nav>
          <div className="mainFloatRight">
            <section  className='orange'
							ref={(section) => { this.Orange = section; }}><Orange/></section>
            <section  className='green'
							ref={(section) => { this.Green = section; }}><Green/></section>
            <section  className='red'
							ref={(section) => { this.Red = section; }}><Red/></section>
            <section  className='blue'
							ref={(section) => { this.Blue = section; }}><Blue/></section>
            <section  className='grey'
              ref={(section) => { this.Grey = section; }}><Grey/></section>
            <section  className='pink'
							ref={(section) => { this.Pink = section; }}><Pink/></section>
            <section  className='purple'
							ref={(section) => { this.Purple = section; }}><Purple/></section>
            <section  className='black'
  						ref={(section) => { this.Black = section; }}><Black/></section>
          </div>
        </div>
      </div>)
  }
}
class NotFound extends React.Component {
  render() {
  return <h1>404,Nothing is here</h1>;
  }
}


/* ------ MAIN Sections ------ */
class Orange extends React.Component {
  render() {
    return (
      <div className="orange">
      </div>);
    }
  }

class Green extends React.Component {
  render() {
  return (
      <div className="green">
      </div>);
    }
  }

class Red extends React.Component {
  render() {
  return (
      <div className="red">
      </div>);
  }
}

class Blue extends React.Component {
  render() {
  return (
    <div className="blue">
    </div>);
  }
}

class Pink extends React.Component {
  render() {
  return (
    <div className="pink">
    </div>);
  }
}

class Grey extends React.Component {
  render() {
  return (
      <div className="grey">
      </div>);
  }
}

class Purple extends React.Component {
  render() {
  return (
    <div className="purple">
    </div>);
  }
}


class Black extends React.Component {
  render() {
  return (
    <div className="black">
  	</div>);
  }
}


/* ------ RENDER ------ */
class NavMainRouter extends React.Component {
  render() {
  return <Router history={hashHistory}>
      <Route path='/' component={SectionNav}>
        <IndexRoute component={Green} />
        <Route path='/red' component={Red} />
        <Route path='/blue' component={Blue} />
        <Route path='/pink' component={Pink} />
        <Route path='/grey' component={Grey} />
        <Route path='/purple' component={Purple} />
        <Route path='/black' component={Black} />
        <Route path='*' component={NotFound}/>
      </Route>
  </Router>
  }
}
class Content extends React.Component {
  render() {
  return (
    <NavMainRouter/>
  )}
}
class App extends React.Component {
  render() {
    return(<div>
        <Content/>
      </div>)
    }
  }
ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
