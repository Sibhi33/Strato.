import React, { useState } from 'react';
import Modal from 'react-modal';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from 'lucide-react';

Modal.setAppElement('#root');

const AdminDashboard = () => {
    const [books, setBooks] = useState([
        { id: 1, title: 'The Adventures of Tom Sawyer', thumbnail: 'https://ik.imagekit.io/SIBHI/Imagica/the-adventures-of-tom-sawyer-113.jpg', file: null },
        { id: 2, title: 'Pride and Prejudice', thumbnail: 'https://ik.imagekit.io/SIBHI/Imagica/Pride_and_Prejudice_Cover-Amazon-Front__77495.1569338564.386.513.jpg', file: null },
        { id: 3, title: 'Moby Dick', thumbnail: 'https://ik.imagekit.io/SIBHI/Imagica/MV5BODM4NmEzNWEtNDE4ZC00NDNlLWI1ZDQtYzJhYWVmMTkzMjJlXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg', file: null },
        { id: 4, title: '1984', thumbnail: 'https://ik.imagekit.io/SIBHI/Imagica/ninteen-eighty-four-book-review.jpg', file: null },
        // Add more example storybooks as needed
    ]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [formData, setFormData] = useState({ file: null, title: '', thumbnail: '' });

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setFormData({ ...formData, file });
        }
    };

    const handleAddBook = () => {
        const newBook = {
            id: books.length + 1,
            title: formData.title,
            thumbnail: formData.thumbnail || 'https://example.com/default-cover.png', // Default cover image if none provided
            file: formData.file,
        };
        setBooks([...books, newBook]);
        setFormData({ file: null, title: '', thumbnail: '' });
        closeAddModal();
    };

    const handleDeleteBook = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId));
    };

    return (
        <div className="p-4">
            <button
                onClick={openAddModal}
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                <Plus className="inline-block h-4 w-4 mr-2" />
                Add Book
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map(book => (
                    <Card key={book.id} className="border border-primary bg-gradient-to-r from-blue-400 to-blue-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {book.title}
                            </CardTitle>
                            <button
                                onClick={() => handleDeleteBook(book.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <Trash className="h-4 w-4" />
                            </button>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={book.thumbnail}
                                alt={book.title}
                                className="w-full h-auto object-cover"
                            />
                            {book.file && (
                                <a
                                    href={URL.createObjectURL(book.file)}
                                    download
                                    className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded-md text-center"
                                >
                                    Download PDF
                                </a>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Add Book Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onRequestClose={closeAddModal}
                contentLabel="Add Book Modal"
                className="fixed inset-0 bg-white p-6 max-w-md mx-auto my-8 rounded-lg shadow-lg"
            >
                <h2 className="text-lg font-bold mb-4">Add Book</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
                        <input
                            type="text"
                            name="thumbnail"
                            value={formData.thumbnail}
                            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Upload PDF</label>
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleAddBook}
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                        Add Book
                    </button>
                    <button
                        type="button"
                        onClick={closeAddModal}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                        Cancel
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default AdminDashboard;
