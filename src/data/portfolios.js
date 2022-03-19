import proShop from '../img/portImages/proshop.PNG'
import muso from '../img/portImages/muso.PNG'
import liveChat from '../img/portImages/liveChat.png'
import html from '../img/portImages/html.png'
import testing from '../img/portImages/testing.png'
import form from '../img/portImages/form.png'

const portfolios = [
  {
    id: 1,
    category: 'MERN',
    image: proShop,
    link1: 'https://github.com/ShawonAkash/proshop',
    link2: 'https://proshop2.herokuapp.com/',
    title: 'MERN Stack E-commerce Website with admin panel',
    text: 'Created with React, Node and Mongodb',
  },
  {
    id: 2,
    category: 'MEVN',
    image: muso,
    link1: 'https://github.com/ShawonAkash/Muso-Ninjas',
    link2: 'https://muso-ninjas-c109c.web.app/',
    title: 'A Song Playlist creator',
    text: 'Song add, delete & many more',
  },
  {
    id: 3,
    category: 'MEVN',
    image: liveChat,
    link1: 'https://github.com/ShawonAkash/Live-Chat-Room',
    link2: 'https://live-chat-room-e9hvv72bq-shawonakash.vercel.app/',
    title: 'Live Chat',
    text: 'Chat application with vue & Firebase',
  },
  {
    id: 4,
    category: 'HTML & CSS',
    image: form,
    link1: 'https://github.com/ShawonAkash/Sliding-Sign-in-up-Form',
    link2: 'https://shawonakash.github.io/Sliding-Sign-in-up-Form/',
    title: 'Beautiful Sign in/up Form',
    text: 'Animated Sliding Sign in/up Form',
  },
  {
    id: 5,
    category: 'Selenium',
    image: testing,
    link1: 'https://github.com/ShawonAkash/Selenium-testing',
    //link2: '',
    title: 'Testing Google News',
    text: 'Automated Selenium Testing with JAVA',
  },
  {
    id: 6,
    category: 'HTML & CSS',
    image: html,
    link1: 'https://github.com/ShawonAkash/50-Fairly-Simple-projects',
    link2: 'https://www.google.com',
    title: '50 Project',
    text: '50 Raw HTML CSS JAVASCRIPT Project',
  },
  {
    id: 7,
    category: 'Cypress.Io',
    image: testing,
    link1: 'https://github.com/ShawonAkash/cypress-testing',
    //link2: 'https://www.google.com',
    title: 'Testing Flickr',
    text: 'Automated Cypress testing with Javascript',
  },
]

export default portfolios
