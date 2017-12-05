import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import InterestedList from './InterestedList';
import Modal from './Modal';

const classes =
  [
    {
      "code": "CSCI 0020",
      "title": "The Digital World",
      "img_src": "http://cs.brown.edu/courses/csci0020/img/super-mario-kart-banner.jpg",
      "typical_week_hrs": 2.9,
      "level": "beginner",
      "pathway": ""
    },
    {
      "code": "CSCI 0040",
      "title": "Introduction to Scientific Computing",
      "img_src": "http://www.indiewire.com/wp-content/uploads/2016/07/zootopia.jpg",
      "typical_week_hrs": 12.1,
      "level": "beginner",
      "pathway": ""
    },
    {
      "code": "CSCI 0080",
      "title": "A First Byte of Computer Science",
      "img_src": "http://cs.brown.edu/courses/cs008/2017/images/logo.png",
      "typical_week_hrs": 2.7,
      "level": "beginner",
      "pathway": ""
    },
    {
      "code": "CSCI 0100",
      "title": "Data Fluency",
      "img_src": "http://cs.brown.edu/courses/cs100/img/treelife.png",
      "typical_week_hrs": 4.9,
      "level": "beginner",
      "pathway": ""
    },
    {
      "code": "CSCI 0150",
      "title": "Introduction to Object-Oriented Programming",
      "img_src": "http://cs.brown.edu/courses/csci0150/assets/css/images/background.jpg",
      "typical_week_hrs": 11.8,
      "level": "introductory",
      "pathway": ""
    },
    {
      "code": "CSCI 0160",
      "title": "Introduction to Algorithms and Data Structures",
      "img_src": "http://cs.brown.edu/courses/csci0160/static/images/jumbotron/jumbo-home.jpg",
      "typical_week_hrs": 9,
      "level": "introductory",
      "pathway": ""
    },
    {
      "code": "CSCI 0170",
      "title": "An Integrated Introduction",
      "img_src": "http://cs.brown.edu/courses/csci0170/img/ken-reid-290754.jpg",
      "typical_week_hrs": 12.4,
      "level": "introductory",
      "pathway": ""
    },
    {
      "code": "CSCI 0180",
      "title": "An Integrated Introduction, Semester II",
      "img_src": "http://cs.brown.edu/courses/csci0180/imgs/slideshow/cartoon1.jpg",
      "typical_week_hrs": 12.7,
      "level": "introductory",
      "pathway": ""
    },
    {
      "code": "CSCI 0190",
      "title": "Accelerated Introduction",
      "img_src": "http://cs.brown.edu/courses/csci0190/first-four-htas.jpg",
      "typical_week_hrs": 8.1,
      "level": "introductory",
      "pathway": ""
    },
    {
      "code": "CSCI 0220",
      "title": "Introduction to Data Structures and Probability",
      "img_src": "http://cs.brown.edu/courses/csci0220/static/images/header-image.png",
      "typical_week_hrs": 8.2,
      "level": "intermediate",
      "pathway": "systems software_principles security biology"
    },
    {
      "code": "CSCI 0320",
      "title": "Introduction to Software Engineering",
      "img_src": "http://cdn.bloody-disgusting.com/wp-content/uploads/2015/11/119091-rick-and-morty-rick-and-morty.jpg",
      "typical_week_hrs": 18.2,
      "level": "intermediate",
      "pathway": "systems software_principles data visual biology design"
    },
    {
      "code": "CSCI 0330",
      "title": "Introduction to Systems",
      "img_src": "http://cs.brown.edu/courses/csci0330/img/characters/monsters-inc.png",
      "typical_week_hrs": 12.5,
      "level": "intermediate",
      "pathway": "systems software_principles security data visual architecture biology design"
    },
    {
      "code": "CSCI 0530",
      "title": "The Matrix in Computer Science",
      "img_src": "http://cs.brown.edu/courses/csci0530/current/style/images/raining_code.gif",
      "typical_week_hrs": 6.6,
      "level": "advanced",
      "pathway": ""
    },
    {
      "code": "CSCI 1010",
      "title": "Theory of Computation",
      "img_src": "http://cs.brown.edu/courses/csci1010/css/tree3.jpg",
      "typical_week_hrs": 8.9,
      "level": "intermediate",
      "pathway": "security theory biology"
    },
    {
      "code": "CSCI 1230",
      "title": "Introduction to Computer Graphics",
      "img_src": "http://cs.brown.edu/courses/csci1230/img/header.jpg",
      "typical_week_hrs": 14.5,
      "level": "advanced",
      "pathway": "visual design"
    },
    {
      "code": "CSCI 1250",
      "title": "Introduction to 3D Computer Animation",
      "img_src": "http://cs.brown.edu/courses/csci1250/images/max_panther_crop.png",
      "typical_week_hrs": 13.9,
      "level": "advanced",
      "pathway": "visual"
    },
    {
      "code": "CSCI 1260",
      "title": "Compilers and Program Analysis",
      "img_src": "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780120884780.jpg",
      "typical_week_hrs": 5.7,
      "level": "advanced",
      "pathway": "software_principles"
    },
    {
      "code": "CSCI 1270",
      "title": "Database Management Systems",
      "img_src": "http://cs.brown.edu/courses/csci1270/static/images/pb/incredibles.jpg",
      "typical_week_hrs": 0,
      "level": "advanced",
      "pathway": "systems software_principles data"
    },
    {
      "code": "CSCI 1280",
      "title": "Intermediate Computer Animation",
      "img_src": "http://cs.brown.edu/courses/csci1280/images/space.png",
      "typical_week_hrs": 15.6,
      "level": "advanced",
      "pathway": "visual"
    },
    {
      "code": "CSCI 1300",
      "title": "User Interfaces and User Experience",
      "img_src": "http://jeffhuang.com/jeff_huang_juggling.gif",
      "typical_week_hrs": 6,
      "level": "advanced",
      "pathway": "visual design"
    },
    {
      "code": "CSCI 1320",
      "title": "Creating Modern Web Apps",
      "img_src": "http://cs.brown.edu/courses/csci1320/images/modern.png",
      "typical_week_hrs": 6.7,
      "level": "advanced",
      "pathway": "systems software_principles security design"
    },
    {
      "code": "CSCI 1370",
      "title": "Virtual Reality Design for Science",
      "img_src": "http://cs.brown.edu/courses/csci1370/images/dino.png",
      "typical_week_hrs": 6.2,
      "level": "advanced",
      "pathway": "visual biology design"
    },
    {
      "code": "CSCI 1380",
      "title": "Distributed Computer Systems",
      "img_src": "https://i.imgur.com/qND98UV.jpg",
      "typical_week_hrs": 10.4,
      "level": "advanced",
      "pathway": "systems software_principles security"
    },
    {
      "code": "CSCI 1410",
      "title": "Artificial Intelligence",
      "img_src": "http://cs.brown.edu/courses/csci1410/2017_images/elon_and_mark.jpg",
      "typical_week_hrs": 5,
      "level": "advanced",
      "pathway": "ai"
    },
    {
      "code": "CSCI 1420",
      "title": "Machine Learning",
      "img_src": "http://cs.brown.edu/courses/csci1420/images/bighero6home.jpg",
      "typical_week_hrs": 12.7,
      "level": "advanced",
      "pathway": "data ai biology"
    },
    {
      "code": "CSCI 1430",
      "title": "Introduction to Computer Vision",
      "img_src": "http://cs.brown.edu/courses/csci1430/CSCI1430_EyeRobot_Illustrator_Credited.png",
      "typical_week_hrs": 7,
      "level": "advanced",
      "pathway": "ai visual"
    },
    {
      "code": "CSCI 1460",
      "title": "Introduction to Computational Linguistics",
      "img_src": "http://cs.brown.edu/courses/csci1460/assets/img/bowties/bowties_1.png",
      "typical_week_hrs": 6.7,
      "level": "advanced",
      "pathway": "ai"
    },
    {
      "code": "CSCI 1470",
      "title": "Deep Learning",
      "img_src": "http://cs.brown.edu/courses/csci1470/img/title-bg-blurred.jpg",
      "typical_week_hrs": 0,
      "level": "advanced",
      "pathway": "ai"
    },
    {
      "code": "CSCI 1510",
      "title": "Introduction to Cryptography and Computer Security",
      "img_src": "http://cs.brown.edu/courses/csci1510/Wordcloud.jpg",
      "typical_week_hrs": 11.6,
      "level": "advanced",
      "pathway": "security theory"
    },
    {
      "code": "CSCI 1550",
      "title": "Probabilistic Methods in Computer Science",
      "img_src": "http://cs.brown.edu/courses/csci1550/photos/Fermat.jpg",
      "typical_week_hrs": 7.4,
      "level": "advanced",
      "pathway": "data ai theory"
    },
    {
      "code": "CSCI 1570",
      "title": "Algorithms",
      "img_src": "http://cs.brown.edu/courses/csci1570/images/pop_up.png",
      "typical_week_hrs": 18.8,
      "level": "advanced",
      "pathway": "theory biology"
    },
    {
      "code": "CSCI 1600",
      "title": "Embedded and Real-Time Software",
      "img_src": "http://cs.brown.edu/courses/csci1600/images/board.jpg",
      "typical_week_hrs": 4.1,
      "level": "advanced",
      "pathway": "systems software_principles architecture design"
    },
    {
      "code": "CSCI 1650",
      "title": "Software Security and Exploitation",
      "img_src": "https://i.imgur.com/qND98UV.jpg",
      "typical_week_hrs": 0,
      "level": "advanced",
      "pathway": "systems software_principles security"
    },
    {
      "code": "CSCI 1660",
      "title": "Computer Systems Security",
      "img_src": "http://research-it.berkeley.edu/sites/default/files/articles/locked-laptop.jpg",
      "typical_week_hrs": 7.8,
      "level": "advanced",
      "pathway": "systems security"
    },
    {
      "code": "CSCI 1670",
      "title": "Operating Systems",
      "img_src": "http://cs.brown.edu/courses/csci1670/photos/course-collage.png",
      "typical_week_hrs": 12.7,
      "level": "advanced",
      "pathway": "systems security"
    },
    {
      "code": "CSCI 1680",
      "title": "Computer Networks",
      "img_src": "https://i.imgur.com/qND98UV.jpg",
      "typical_week_hrs": 22.9,
      "level": "advanced",
      "pathway": "systems"
    },
    {
      "code": "CSCI 1690",
      "title": "Operating Systems, Semester II",
      "img_src": "http://cs.brown.edu/courses/csci1670/photos/course-collage.png",
      "typical_week_hrs": 15.7,
      "level": "advanced",
      "pathway": ""
    },
    {
      "code": "CSCI 1730",
      "title": "Programming Languages",
      "img_src": "http://cs.brown.edu/courses/cs173/lambdahead.jpg",
      "typical_week_hrs": 4.4,
      "level": "advanced",
      "pathway": "systems software_principles security"
    },
    {
      "code": "CSCI 1760",
      "title": "Multiprocessor Synchronization",
      "img_src": "http://cs.brown.edu/courses/csci1760/imgs/sync2.png",
      "typical_week_hrs": 5.9,
      "level": "advanced",
      "pathway": "systems theory architecture"
    },
    {
      "code": "CSCI 1800",
      "title": "Cybersecurity and International Relations",
      "img_src": "http://cs.brown.edu/courses/csci1800/static/images/background1.jpg",
      "typical_week_hrs": 3.8,
      "level": "advanced",
      "pathway": "security"
    },
    {
      "code": "CSCI 1810",
      "title": "Computational Molecular Biology",
      "img_src": "http://cs.brown.edu/courses/csci1810/images/beatles.jpg",
      "typical_week_hrs": 6.3,
      "level": "advanced",
      "pathway": "theory biology"
    },
    {
      "code": "CSCI 1820",
      "title": "Algorithmic Foundations of Computational Biology",
      "img_src": "http://cs.brown.edu/courses/csci1820/images/dnanumbers.jpg",
      "typical_week_hrs": 4.7,
      "level": "advanced",
      "pathway": "biology"
    },
    {
      "code": "CSCI 1900",
      "title": "csciStartup",
      "img_src": "https://innorobo.com/wp-content/uploads/2015/02/Startup-idea-building.jpg",
      "typical_week_hrs": 7.4,
      "level": "advanced",
      "pathway": "design"
    }
  ]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className="App">
        <Modal isVisible={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <InterestedList className='interested-list' items={classes} />
          <button className='modal-ui-button' onClick={() => this.closeModal()}>Close</button>
        </Modal>
        <div >
          <FilteredList items={classes} />
        </div>
        <button className="modal-button" onClick={() => this.openModal()}><img className='modal-button-img' src='./cart-logo.png'/></button>
      </div>
    );
  }
}

export default App;
