require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose')
const Contact = require('../models/contactSchema')

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


const sampleContacts = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "+1234567890",
        company: "Acme Corp",
        jobTitle: "Software Engineer"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "+0987654321",
        company: "Tech Solutions",
        jobTitle: "Product Manager"
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        phoneNumber: "+1122334455",
        company: "Innovate LLC",
        jobTitle: "UX Designer"
    },
    {
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        phoneNumber: "+2233445566",
        company: "Global Enterprises",
        jobTitle: "Marketing Specialist"
    },
    {
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        phoneNumber: "+3344556677",
        company: "Future Tech",
        jobTitle: "Data Analyst"
    }
];

const initializeDatabase = async () => {
    try {
        await Contact.deleteMany({});
        console.log('Database cleared.');

        const result = await Contact.insertMany(sampleContacts);
        console.log('Database initialized with sample data');
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
};

initializeDatabase();