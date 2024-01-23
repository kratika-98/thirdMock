import React, { useState } from "react";
const OnboardDoctor = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    imageUrl: "",
    specialization: "",
    experience: "",
    location: "",
    date: "",
    slots: "",
    fee: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://joyous-rose-sheath-dress.cyclic.app/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(doctorInfo),
      });
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Onboard Doctor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={doctorInfo.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={doctorInfo.imageUrl} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Specialization:
          <select name="specialization" value={doctorInfo.specialization} onChange={handleInputChange} required>
            <option value="">Select Specialization</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>
        </label>
        <br />
        <label>
          Experience:
          <input type="text" name="experience" value={doctorInfo.experience} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={doctorInfo.location} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={doctorInfo.date} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Slots:
          <input type="number" name="slots" value={doctorInfo.slots} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Fee:
          <input type="number" name="fee" value={doctorInfo.fee} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OnboardDoctor;