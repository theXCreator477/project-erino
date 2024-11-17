import { motion } from 'framer-motion';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Paper,
    TablePagination,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditContactModal from './EditContactModal';

function ContactsTable() {
    const [contacts, setContacts] = useState([]);
    const [page, setPage] = useState(0);
    const [selectedContact, setSelectedContact] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const rowsPerPage = 5;

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.REACT_SERVER_URL}/contacts`);
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleEdit = (contact) => {
        setSelectedContact(contact); 
        setModalOpen(true); 
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.REACT_SERVER_URL}/contacts/${id}`);
            setContacts(contacts.filter(contact => contact._id !== id));
            flash('Contact deleted successfully', 'Success')
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleModalClose = () => {
        setModalOpen(false); 
        setSelectedContact(null); 
    };

    const handleUpdateContacts = async () => {
        const response = await axios.get(`${import.meta.env.REACT_SERVER_URL}/contacts`);
        setContacts(response.data);
    };

    const displayedContacts = contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='mx-auto mt-10 p-6'
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">All Contacts</h2>

            {
                contacts.length === 0 ?
                    <h2 className="text-2xl font-bold mt-36 text-center text-gray-400">Nothing to see here</h2>
                    :
                    <>
                        <TableContainer component={Paper}>

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Phone Number</TableCell>
                                        <TableCell>Company</TableCell>
                                        <TableCell>Job Title</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedContacts.map((contact) => (
                                        <TableRow key={contact._id} hover>
                                            <TableCell>{contact.firstName}</TableCell>
                                            <TableCell>{contact.lastName}</TableCell>
                                            <TableCell>{contact.email}</TableCell>
                                            <TableCell>{contact.phoneNumber}</TableCell>
                                            <TableCell>{contact.company}</TableCell>
                                            <TableCell>{contact.jobTitle}</TableCell>
                                            <TableCell>
                                                <div className="flex">
                                                    <IconButton onClick={() => handleEdit(contact)} size="small">
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleDelete(contact._id)} size="small">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </TableContainer>

                        <TablePagination
                            rowsPerPageOptions={[5]}
                            component="div"
                            count={contacts.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                        />
                    </>
            }
            <EditContactModal
                open={modalOpen}
                handleClose={handleModalClose}
                contact={selectedContact}
                onUpdate={handleUpdateContacts}
            />
        </motion.div>
    );
}

export default ContactsTable;