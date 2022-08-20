const path = require('path');



// Home Page Controll
const homePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

// about Page Controll
const aboutPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
}

// Blog Page Controll
const blogPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
}

// Contact Page Controll
const contactPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}

// Price Page Controll
const pricePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/price.html'));
}

// Service Page Controll
const servicePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/service.html'));
}

// Single Page Controll
const singlePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/single.html'));
}


// Export controller
module.exports = {
    homePage,
    aboutPage,
    blogPage,
    contactPage,
    pricePage,
    servicePage,
    singlePage
}