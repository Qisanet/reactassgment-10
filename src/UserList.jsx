import { useState } from "react";

const UserList = () => {
    
    const [users, setUsers] = useState([
        { id: 1, name: "Arsema", age: 22 },
        { id: 2, name: "Adiam", age: 24 },
        { id: 3, name: "Beti", age: 26 }
    ]);

    
    const EditHandler = (id) => {
        const updatedUsers = users.map((user) => {
            if (user.id === id) {
                
                const newName = prompt("Enter new name:", user.name);
                const newAge = prompt("Enter new age:", user.age);

                return {
                    ...user,
                    name: newName || user.name, 
                    age: newAge || user.age,   
                };
            }
            return user; 
        });

        
        setUsers(updatedUsers);
    };

    
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                   
                    <p>{user.id} - {user.name} - {user.age} years old</p>
                    
                    <button onClick={() => EditHandler(user.id)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default UserList;
