import img from '../images/1.jpg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.png';
import img8 from '../images/8.jpg';
import img9 from '../images/99.jpg';
import img10 from '../images/101.jpg';

import imgtitle from '../images/1a.jpg';
import imgtitle2 from '../images/22.jpeg';
import imgtitle3 from '../images/33.jpg';
import imgtitle4 from '../images/44.jpg';
import imgtitle5 from '../images/55.jpg';
import imgtitle6 from '../images/66.jpg';
import imgtitle7 from '../images/77.jpg';
import imgtitle8 from '../images/88.jpg';
import imgtitle9 from '../images/99.jpg';
import imgtitle10 from '../images/101.jpg';

import user from '../images/c1.png';
import user2 from '../images/c2.png';
import user3 from '../images/c3.png';
import user4 from '../images/c4.png';
import user5 from '../images/c5.png';

import video from '../images/movie.mp4'

export const MoviesData = [
    {
        _id:1,
        name:'Army Of The Dead',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle,
        image:img,
        category:'Western',
        language:'English',
        year:'2022',
        time:'3hr',
        video:video,
        rate:3.4,
        reviews:23
    },
    {
        _id:2,
        name:'The Conjuring',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle2,
        image: img2,
        category:'Thriller',
        language:'Chinese',
        year:'1999',
        time:'4hr',
        video:video,
        rate:5,
        reviews:100
    },
    {
        _id:3,
        name:'My Favorite Person',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle3,
        image:img3,
        category:'Adventure',
        language:'Korean',
        year:'2000',
        time:'11hr',
        video:video,
        rate:2.5,
        reviews:2
    },
    {
        _id:4,
        name:'Lets Be A Crops',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle4,
        image:img4,
        category:'Musicals',
        language:'English',
        year:'2022',
        time:'5hr',
        video:video,
        rate:1.5,
        reviews:6
    },
    {
        _id:5,
        name:'Below Her Mouth',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle5,
        image:img5,
        category:'Romantic',
        language:'English',
        year:'1899',
        time:'1hr',
        video:video,
        rate:5,
        reviews:56
    },
    {
        _id:6,
        name:'Legend Of The Seeker',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle6,
        image:img6,
        category:'Horror',
        language:'Swahili',
        year:'2012',
        time:'19hr',
        video:video,
        rate:4.5,
        reviews:34
    },
    {
        _id:7,
        name:'Scarlet Heart',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle7,
        image:img7,
        category:'Fantasy',
        language:'Korean',
        year:'2005',
        time:'4hr',
        video:video,
        rate:4.5,
        reviews:34
    },
    {
        _id:8,
        name:'The Last Dance',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle8,
        image:img8,
        category:'Sports',
        language:'Japanese',
        year:'1999',
        time:'6hr',
        video:video,
        rate:4.5,
        reviews:34
    },
    {
        _id:9,
        name:'Titanic',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle9,
        image:img9,
        category:'Drama',
        language:'Swahili',
        year:'2012',
        time:'4hr',
        video:video,
        rate:4.5,
        reviews:34
    },
    {
        _id:10,
        name:'About Time Of The Dead',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem soluta iure aliquam hic aspernatur ullam nesciunt vel dolorem? Nesciunt quam id illo, dolore quibusdam quidem? Perferendis nam ratione velit',
        titleImg:imgtitle10,
        image:img10,
        category:'Comedy',
        language:'French',
        year:'2000',
        time:'1hr',
        video:video,
        rate:4.5,
        reviews:34
    },
]

export const UsersData = [
    {
        _id:1,
        img:user,
        name:'Tom Cruise',
        rate:4.5,
        desc:'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.'
    },
    {
        _id:2,
        img:user2,
        name:'Emily Blunt',
        rate:.5,
        desc:'There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.'
    },
    {
        _id:3,
        img:user3,
        name:'John Snow',
        rate:2.5,
        desc:'The majority have suffered alteration.'
    },
    {
        _id:4,
        img:user4,
        name:'Will Smith',
        rate:5,
        desc:'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.'
    },
    {
        _id:5,
        img:user5,
        name:'Minah Lee',
        rate:1.5,
        desc:'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.'
    },
]