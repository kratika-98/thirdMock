import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("https://joyous-rose-sheath-dress.cyclic.app/appointments", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error("Failed to fetch appointments.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (appointmentId) => {
    
    console.log("Edit appointment with ID:", appointmentId);
  };

  const handleDelete = async (appointmentId) => {
    try {
      const response = await fetch(`https://joyous-rose-sheath-dress.cyclic.app/appointment/${appointmentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        fetchAppointments(); 
      } else {
        console.error("Delete failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Flex flexWrap="wrap" gap={4}>
      {appointments.map((appointment) => (
        <Box key={appointment._id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="300px" boxShadow="lg">
          <Image src={appointment.image} alt={appointment.name} height="200px" width="100%" objectFit="cover" />
          <Box p="6">
            <Text fontWeight="semibold" fontSize="xl" mb={2}>
              {appointment.name}
            </Text>
            <Text color="gray.500" fontSize="sm" mb={2}>
              {appointment.specialization}
            </Text>
            <Text fontSize="sm" mb={2}>
              Experience: {appointment.experience} years
            </Text>
            <Text fontSize="sm" mb={2}>
              Location: {appointment.location}
            </Text>
            <Text fontSize="sm" mb={2}>
              Date: {new Date(appointment.date).toLocaleDateString()}
            </Text>
            <Text fontSize="sm" mb={2}>
              Slots: {appointment.slots}
            </Text>
            <Text fontSize="sm" mb={2}>
              Fee: ${appointment.fee}
            </Text>
            <Flex justifyContent="space-between" mt={4}>
              <Button colorScheme="green" onClick={() => handleEdit(appointment._id)}>
                Edit
              </Button>
              <Button colorScheme="pink" onClick={() => handleDelete(appointment._id)}>
                Delete
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default DoctorDashboard;