/**
 * This function will return a json with the global data
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} json - The Json data from the user
 */
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

/**
 * This function will return a json with the activity data
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} json - The Json activity data from the user
 */
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

/**
 * This function will return a json with all activity session
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} json - The Json activity session from the user
 */
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

/**
 * This function will return a json with all the performance
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} The Json performance from the user
 */

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
