import React from 'react';
import { Component } from 'react';
import FilmItem from './FilmItem';
import ParallaxWrapper from './ParallaxWrapper';
import Banner from './Banner';
import './App.css';

class App extends Component {
  // setting page title
  componentDidMount() {
    document.title = "Pixar Films";
  }
  constructor(props) {
    super(props);
    // initializing array to store FilmItems
    let movies = [];
    for (var num in movieInfo) {
      movies.push(
        <FilmItem
          key={num}
          title={movieInfo[num].title}
          poster={movieInfo[num].poster}
          type={movieInfo[num].type}
          link={movieInfo[num].link}
          release={movieInfo[num].release}
        />
      );
    }
    // initializing state
    this.state = {
      movies: movies,
      movieInfo: movieInfo,
      mainName: "All Films",
      image: require("./img/coco.jpg"),
      display: 1,
      highlight1: highlight,
      highlight2: {},
      highlight3: {},
      highlight4: {},
      highlight5: highlight,
      highlight6: {},
      highlight7: {}
    };
    // binding functions to class
    this.allFilmsClick = this.allFilmsClick.bind(this);
    this.featureFilmsClick = this.featureFilmsClick.bind(this);
    this.shortFilmsClick = this.shortFilmsClick.bind(this);
    this.latestClick = this.latestClick.bind(this);
    this.oldestClick = this.oldestClick.bind(this);
    this.alphabetClick = this.alphabetClick.bind(this);
    this.alphabetRevClick = this.alphabetRevClick.bind(this);
    this.checkDisplay = this.checkDisplay.bind(this);
  }

  // function called when all films are to be displayed
  allFilmsClick() {
    let movies = [];
    for (var num in this.state.movieInfo) {
      movies.push(
        <FilmItem
          key={num}
          title={this.state.movieInfo[num].title}
          poster={this.state.movieInfo[num].poster}
          type={this.state.movieInfo[num].type}
          link={this.state.movieInfo[num].link}
          release={this.state.movieInfo[num].release}
        />
      );
    }
    this.setState({
      movies: movies,
      mainName: "All Films",
      image: require("./img/coco.jpg"),
      highlight5: highlight,
      highlight6: {},
      highlight7: {}
    }, () => {
      this.checkDisplay();
    });
  }

  // function to display only featured films 
  featureFilmsClick() {
    let movies = [];
    for (var num in this.state.movieInfo) {
      if (this.state.movieInfo[num].type === "Feature") {
        movies.push(
          <FilmItem
            key={num}
            title={this.state.movieInfo[num].title}
            poster={this.state.movieInfo[num].poster}
            type={this.state.movieInfo[num].type}
            link={this.state.movieInfo[num].link}
            release={this.state.movieInfo[num].release}
          />
        );
      }
    }
    this.setState({
      movies: movies,
      mainName: "Feature Films",
      image: require("./img/up-house.jpg"),
      highlight5: {},
      highlight6: highlight,
      highlight7: {}
    }, () => {
      this.checkDisplay();
    });
  }

  // function to display only short films 
  shortFilmsClick() {
    let movies = [];
    for (var num in this.state.movieInfo) {
      if (this.state.movieInfo[num].type === "Short") {
        movies.push(
          <FilmItem
            key={num}
            title={this.state.movieInfo[num].title}
            poster={this.state.movieInfo[num].poster}
            type={this.state.movieInfo[num].type}
            link={this.state.movieInfo[num].link}
            release={this.state.movieInfo[num].release}
          >
          </FilmItem>
        );
      }
    }
    this.setState({
      movies: movies,
      mainName: "Short Films",
      image: require("./img/piper-hero.jpg"),
      highlight5: {},
      highlight6: {},
      highlight7: highlight
    }, () => {
      this.checkDisplay();
    });
  }

  // displaying films in order of most recent release
  latestClick() {
    let movies = this.state.movies;
    let movies2 = [];
    let movieInfo_r = [];
    for (var num in movieInfo) {
      movieInfo_r.push(movieInfo[num]);
    }
    for (var num1 in movieInfo_r) {
      for (var num2 in movies) {
        if (movies[num2].props.title === movieInfo_r[num1].title) {
          movies2.push(movies[num2]);
        }
      }
    }
    this.setState({
      movies: movies2,
      display: 1,
      highlight1: highlight,
      highlight2: {},
      highlight3: {},
      highlight4: {}
    });
  }

  // displaying films in least recent release
  oldestClick() {
    let movies = this.state.movies;
    let movies2 = [];
    let movieInfo_r = [];
    for (var num in movieInfo) {
      movieInfo_r.push(movieInfo[num]);
    }
    movieInfo_r.reverse();
    for (var num1 in movieInfo_r) {
      for (var num2 in movies) {
        if (movies[num2].props.title === movieInfo_r[num1].title) {
          movies2.push(movies[num2]);
        }
      }
    }
    this.setState({
      movies: movies2,
      display: 2,
      highlight1: {},
      highlight2: highlight,
      highlight3: {},
      highlight4: {}
    });
  }

  // displaying films alphabetically
  alphabetClick() {
    let movies = this.state.movies;
    let titles = [];
    for (var num in movies) {
      titles.push(movies[num].props.title);
    }
    titles.sort();
    let movies2 = [];
    for (var num1 in titles) {
      for (var num2 in movies) {
        if (titles[num1] === movies[num2].props.title) {
          movies2.push(movies[num2]);
        }
      }
    }
    this.setState({
      movies: movies2,
      display: 3,
      highlight1: {},
      highlight2: {},
      highlight3: highlight,
      highlight4: {}
    });
  }

  //displaying films in reverse alphabetical order
  alphabetRevClick() {
    let movies = this.state.movies;
    let titles = [];
    for (var num in movies) {
      titles.push(movies[num].props.title);
    }
    titles.sort();
    titles.reverse();
    let movies2 = [];
    for (var num1 in titles) {
      for (var num2 in movies) {
        if (titles[num1] === movies[num2].props.title) {
          movies2.push(movies[num2]);
        }
      }
    }
    this.setState({
      movies: movies2,
      display: 4,
      highlight1: {},
      highlight2: {},
      highlight3: {},
      highlight4: highlight
    });
  }

  //  checking what the current sort is (1 for latest, 2 for oldest, 3 for alphabetical, 4 for reverse alphabetical)
  checkDisplay() {
    if (this.state.display === 1) {
      this.latestClick();
    }
    else if (this.state.display === 2) {
      this.oldestClick();
    }
    else if (this.state.display === 3) {
      this.alphabetClick();
    }
    else if (this.state.display === 4) {
      this.alphabetRevClick();
    }
  }

  render() {
    return <div>
      <Banner button1={this.allFilmsClick} highlight5={this.state.highlight5} button2={this.featureFilmsClick} highlight6={this.state.highlight6} button3={this.shortFilmsClick} highlight7={this.state.highlight7} button5={this.latestClick} highlight1={this.state.highlight1} button6={this.oldestClick} highlight2={this.state.highlight2} button7={this.alphabetClick} highlight3={this.state.highlight3} button8={this.alphabetRevClick} highlight4={this.state.highlight4} />
        <ParallaxWrapper image={this.state.image} mainName={this.state.mainName} />
        <div className="movies">{this.state.movies}</div>
        <h1 className="footer"> | | | </h1>
      </div>;
  }
}

// highlight applied to current sort
const highlight = {
  color: "black",
  background: "white"
}

// defining array of data for each movie
const movieInfo = [
  {title: "Toy Story 4", poster: require("./img/toy-story4.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films-toy-story-4", release: "June 21, 2019"},
  {title:"Incredibles 2", poster: require("./img/inc-2.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/incredibles-2", release: "June 15, 2018"},
  {title:"Bao", poster: require("./img/bao.jpg"), type: "Short", link:"https://www.pixar.com/bao", release: "June 15, 2018"},
  {title:"Coco", poster: require("./img/coco-post.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/coco", release:"November 22, 2017"},
  {title:"Cars 3", poster: require("./img/cars-3.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/cars-3", release:"June 16, 2017"},
  {title:"Lou", poster: require("./img/lou.jpg"), type: "Short", link:"https://www.pixar.com/lou", release:"June 16, 2017"},
  {title:"Finding Dory", poster: require("./img/dory.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/finding-dory", release: "June 17, 2016"},
  {title:"Piper", poster: require("./img/piper-pos.jpg"), type: "Short", link:"https://www.pixar.com/piper", release:"June 17, 2016"},
  {title:"The Good Dinosaur", poster: require("./img/good-dino.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/the-good-dinosaur", release:"November 25, 2015"},
  {title:"Sanjay's Super Team", poster: require("./img/sanjay.jpg"), type: "Short", link:"https://www.pixar.com/sanjays-super-team", release:"November 25, 2015"},
  {title:"Inside Out", poster: require("./img/inside-out.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/inside-out", release: "June 19, 2015"},
  {title:"Lava", poster: require("./img/lava.jpg"), type: "Short", link:"https://www.pixar.com/lava", release:"June 19, 2015"},
  {title:"Monsters University", poster: require("./img/mu.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/monsters-university", release:"June 21, 2013", },
  {title:"The Blue Umbrella", poster: require("./img/blue-umb.jpg"), type: "Short", link:"https://www.pixar.com/the-blue-umbrella", release:"June 21, 2013"},
  {title:"Brave", poster: require("./img/brave.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/brave", release:"June 22, 2012"},
  {title:"La Luna", poster: require("./img/la-luna.jpg"), type: "Short", link:"https://www.pixar.com/la-luna", release:"June 22, 2012"},
  {title:"Cars 2", poster: require("./img/cars-2.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/cars-2", release:"June 18, 2011"},
  {title:"Toy Story 3", poster: require("./img/toy-story3.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/toy-story-3", release:"June 18, 2010"},
  {title:"Day & Night", poster: require("./img/day-night.jpg"), type: "Short", link:"https://www.pixar.com/day-night", release:"June 18, 2010"},
  {title:"Up", poster: require("./img/up.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/up", release:"May 29, 2009"},
  {title:"Partly Cloudy", poster: require("./img/pcloudy.jpg"), type: "Short", link:"https://www.pixar.com/partly-cloudy", release:"May 29, 2009"},
  {title:"WALL-E", poster: require("./img/wall-e-pos.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/walle", release:"June 27, 2008"},
  {title:"Presto", poster: require("./img/presto.jpg"), type: "Short", link:"https://www.pixar.com/presto", release:"June 27, 2008"},
  {title:"Ratatouille", poster: require("./img/rat.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/ratatouille", release:"June 29, 2007"},
  {title:"Lifted", poster: require("./img/lift.jpg"), type: "Short", link:"https://www.pixar.com/lifted", release:"June 29, 2007"},
  {title:"Cars", poster: require("./img/cars.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/cars", release:"June 9, 2006"},
  {title:"One Man Band", poster: require("./img/one-man.jpg"), type: "Short", link:"https://www.pixar.com/one-man-band", release:"June 9, 2006"},
  {title:"The Incredibles", poster: require("./img/incred.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/the-incredibles", release:"November 5, 2004"},
  {title:"Boundin'", poster: require("./img/bound.jpg"), type: "Short", link:"https://www.pixar.com/boundin", release:"November 5, 2004"},
  {title:"Finding Nemo", poster: require("./img/nemo.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/finding-nemo", release:"May 30, 2003"},
  {title:"Knick Knack", poster: require("./img/knack.jpg"), type: "Short", link:"https://www.pixar.com/knick-knack", release:"May 30, 2003"},
  {title:"Monsters Inc.", poster: require("./img/m-inc.JPG"), type: "Feature", link:"https://www.pixar.com/feature-films/monsters-inc", release:"November 2, 2001"},
  {title:"For the Birds", poster: require("./img/for-birds.jpg"), type: "Short", link:"https://www.pixar.com/for-the-birds", release:"November 2, 2001"},
  {title:"Toy Story 2", poster: require("./img/toy-story2.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/toy-story-2", release:"November 13, 1999"},
  {title:"Luxo Jr.", poster: require("./img/luxo-jr.jpg"), type: "Short", link:"https://www.pixar.com/luxo-jr", release:"November 13, 1999"},
  {title:"A Bug's Life", poster: require("./img/bug-life.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/a-bugs-life", release:"November 14, 1998"},
  {title:"Geri's Game", poster: require("./img/geri.jpg"), type: "Short", link:"https://www.pixar.com/geris-game", release:"November 14, 1998"},
  {title:"Toy Story", poster: require("./img/toy-story.jpg"), type: "Feature", link:"https://www.pixar.com/feature-films/toy-story", release:"November 22, 1995"},
  {title:"Tin Toy", poster: require("./img/tin-toy.jpg"), type: "Short", link:"https://www.pixar.com/tin-toy", release:"August 2, 1988"},
  {title:"Red's Dream", poster: require("./img/red-dream.jpg"), type: "Short", link:"https://www.pixar.com/reds-dream", release:"July 10, 1987"}
]

export default App;
