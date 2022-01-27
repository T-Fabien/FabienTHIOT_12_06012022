// Get User Global Infos
export const getInfosUser = async (id) => {
  // Request
  return fetch(`http://localhost:3000/user/${id}`).then((response) => {
    try {
      // If Server Error
      if (response.status >= 400) {
        return response.text().then((text) => {
          throw new Error("Server responds with error!");
        });
      }
      // Return data
      return response.clone().json();
    } catch (err) {
      console.log(err);
    }
  });
};

// Get User Activity Infos
export const getUserActivity = async (id) => {
  // Request
  return fetch(`http://localhost:3000/user/${id}/activity`).then((res) => {
    // If Server Error
    if (res.status >= 400) {
      return res.text().then((text) => {
        throw new Error("Server responds with error!");
      });
    } else {
      // Return data
      return res.json();
    }
  });
};

// Get User Average session
export const getUserAverage = async (id) => {
  // Request
  return fetch(`http://localhost:3000/user/${id}/average-sessions`).then(
    (res) => {
      // If Server Error
      if (res.status >= 400) {
        return res.text().then((text) => {
          throw new Error("Server responds with error!");
        });
      } else {
        // Return data
        return res.clone().json();
      }
    }
  );
};

// Get User Activity Infos
export const getUserPerformance = async (id) => {
  return fetch(`http://localhost:3000/user/${id}/performance`).then((res) => {
    // If Server Error
    if (res.status >= 400) {
      return res.text().then((text) => {
        throw new Error("Server responds with error!");
      });
    } else {
      // Return data
      return res.clone().json();
    }
  });
};
