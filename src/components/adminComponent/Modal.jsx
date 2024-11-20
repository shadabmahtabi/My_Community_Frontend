import React from 'react';

const Modal = ({ isOpen, modalType, formData, handleInputChange, handleFileChange, closeModal, handleAddBook, handleUpdateBook }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">
          {modalType === 'add' ? 'Add Book' : modalType === 'edit' ? 'Edit Book' : 'Book Details'}
        </h2>
        {modalType === 'view' ? (
          <div>
            <p><strong>Title:</strong> {formData.title}</p>
            <p><strong>Author:</strong> {formData.author}</p>
            <p><strong>Pages:</strong> {formData.pages}</p>
            <p><strong>Published:</strong> {formData.published}</p>
            <p><strong>Category:</strong> {formData.category}</p>
            <p><strong>Image:</strong> <a href={formData.image} target="_blank" rel="noopener noreferrer">View Image</a></p>
            {formData.pdf && (
              <iframe
                src={`http://localhost:3000/${formData.pdf}`}
                width="100%"
                height="400px"
                title="Book PDF"
              />
            )}
          </div>
        ) : (
          <form>
            <input type="text" name="title" value={formData.title} placeholder="Title" onChange={handleInputChange} className="w-full p-2 mb-2 border rounded" />
            <input type="text" name="author" value={formData.author} placeholder="Author" onChange={handleInputChange} className="w-full p-2 mb-2 border rounded" />
            <input type="number" name="pages" value={formData.pages} placeholder="Pages" onChange={handleInputChange} className="w-full p-2 mb-2 border rounded" />
            <input type="date" name="published" value={formData.published} onChange={handleInputChange} className="w-full p-2 mb-2 border rounded" />
            <input type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleInputChange} className="w-full p-2 mb-2 border rounded" />
            <input type="text" name="category" value={formData.category} placeholder="Category" onChange={handleInputChange} className="w-full p-2 mb-2 border rounded" />
            <input type="file" name="pdf" onChange={handleFileChange} accept="application/pdf" className="w-full p-2 mb-2 border rounded" />
          </form>
        )}
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">Cancel</button>
          {modalType === 'add' && <button onClick={handleAddBook} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>}
          {modalType === 'edit' && <button onClick={handleUpdateBook} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
