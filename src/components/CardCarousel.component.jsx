import React from 'react';

import Card from './Card.component'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import notetaker from '../Images/Note Taker App.png';
import employeemanager from '../Images/MySQL_Emp_Mngr_App.png';
import goodreadme from '../Images/Good-ReadMe-Generator-App.png';
import passwordgen from '../Images/passwordGen.png';
import weatherapp from '../Images/WeatherDashboard.png';
import beerfinder from '../Images/BeerFinder.png';

class CardCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Express.js Note Taker',
                    subTitle: 'An Express.js & Node.js note taking CLI application used to write, save, and delete notes.',
                    imgSrc: notetaker,
                    link: 'https://afternoon-crag-91916.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'MySQL Employee Mangager App',
                    subTitle: 'A server side app that simulates a cms allowing users to add view, remove employees.',
                    imgSrc: employeemanager,
                    link: 'https://drive.google.com/file/d/1q68VdVBszt0NrkFm5BUARks9aYxDouHC/view',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Good ReadMe Generator',
                    subTitle: 'A command line application using Node.js and ES6+ to create a ReadMe file based on user input.',
                    imgSrc: goodreadme,
                    link: 'https://drive.google.com/file/d/1SSfzo-ZMTiYfcOxnyIisY2mxz4WfVZKn/view',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Password Generator',
                    subTitle: 'A strong random password generator using HTML, CSs, JavaScript!',
                    imgSrc: passwordgen,
                    link: 'https://brandonejenkins.github.io/BJ-bc-Homework-3/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Weather Forecast App',
                    subTitle: 'A simple weather forecast app that consumes a RESTful API!',
                    imgSrc: weatherapp,
                    link: 'https://brandonejenkins.github.io/BJ-bc-Homework-6/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Brewery Finder App',
                    subTitle: 'An app that links consumers with their favorite breweries in this RESTful API project!',
                    imgSrc: beerfinder,
                    link: 'https://brandonejenkins.github.io/Beer-Finder/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default CardCarousel;