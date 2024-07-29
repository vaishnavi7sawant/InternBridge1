import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Snackbar, SnackbarContent } from "@mui/material";

const SOCKET_SERVER_URL = "http://localhost:4444";

const JobNotificationComponent = () => {
  const [socket, setSocket] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Connect to the Socket.io server
    const socketIo = io(SOCKET_SERVER_URL);
    setSocket(socketIo);

    // Listen for new job notifications
    socketIo.on("newJob", (job) => {
      setNotification({ message: `New job posted: ${job.title}`, job });
    });

    // Cleanup on component unmount
    return () => {
      socketIo.disconnect();
    };
  }, []);

  const handleClose = () => {
    setNotification(null);
  };

  return (
    <>
      {notification && (
        <Snackbar
          open={!!notification}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <SnackbarContent
            message={notification.message}
            style={{ backgroundColor: "#4caf50" }} // Customize as needed
          />
        </Snackbar>
      )}
    </>
  );
};

export default JobNotificationComponent;
