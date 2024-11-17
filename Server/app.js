require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/contactSchema')

const app = express();
const PORT = process.env.PORT || 5000;

const corsConfig = {
    origin: true
}

app.use(cors(corsConfig));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// ROUTES

app.post('/contacts', async (req, res) => {
    const newContact = new Contact(req.body);
    try {
        await newContact.save();
        res.send('New Contact saved successfully');
    } catch (error) {
        res.status(400).send('Error creating contact');
    }
});

app.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).send('Error fetching contacts');
    }
});

app.put('/contacts/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).send('Contact not found');
        }
        res.json(updatedContact);
    } catch (error) {
        res.status(400).send('Error updating contact');
    }
});

app.delete('/contacts/:id', async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json('Contact not found');
        }
        res.send('Contact deleted successfully');
    } catch (error) {
        res.status(500).json('Error deleting contact');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});