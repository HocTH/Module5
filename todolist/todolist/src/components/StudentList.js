import React, { useState } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleAddStudent = () => {
        if (name.trim() !== '') {
            const newStudent = {
                id: new Date().getTime().toString(),
                name: name,
            };

            setStudents([...students, newStudent]);
            setName('');
        }
    };

    const handleEditStudent = (id) => {
        const studentToEdit = students.find((student) => student.id === id);
        if (studentToEdit) {
            setName(studentToEdit.name);
            setEditingId(id);
        }
    };

    const handleUpdateStudent = () => {
        if (editingId) {
            const updatedStudents = students.map((student) =>
                student.id === editingId ? { ...student, name: name } : student
            );
            setStudents(updatedStudents);
            setName('');
            setEditingId(null);
        }
    };

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
    };

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name}
                        <button onClick={() => handleEditStudent(student.id)}>Edit</button>
                        <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter student name"
            />
            {editingId ? (
                <button onClick={handleUpdateStudent}>Update</button>
            ) : (
                <button onClick={handleAddStudent}>Add</button>
            )}
        </div>
    );
};

export default StudentList;