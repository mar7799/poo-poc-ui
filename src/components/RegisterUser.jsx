import { useState } from "react";
import axios from 'axios';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });

  // Handle changes for normal fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle changes for nested address fields
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    
    // Send formData to backend API here

    try{

      const response = await axios.post('http://localhost:5000/users/registerUser',formData,{
        headers: {
          'Content-Type':'application/json'
        }
      });
      console.log("Server Response:", response.data);
      alert("User registered successfully!");
      
      // Reset form fields after successful submission
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            address: {
                street: "",
                city: "",
                state: "",
                country: "",
                zipCode: "",
            },
        });

    }catch(error){
      console.error("Error Registering User:", error.response ? error.response.data: error.message);
      alert("Registration Failed. Please try again.")
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />

        <h3>Address</h3>
        <input type="text" name="street" value={formData.address.street} onChange={handleAddressChange} placeholder="Street" required />
        <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} placeholder="City" required />
        <input type="text" name="state" value={formData.address.state} onChange={handleAddressChange} placeholder="State" required />
        <input type="text" name="country" value={formData.address.country} onChange={handleAddressChange} placeholder="Country" required />
        <input type="text" name="zipCode" value={formData.address.zipCode} onChange={handleAddressChange} placeholder="Zip Code" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
