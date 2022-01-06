export const getInfosUser = async (id) => {
  return fetch(`http://localhost:3000/user/${id}`).then((response) => {
    try {
      if (response.status >= 400) {
        return response.text().then((text) => {
          throw new Error("Server responds with error!");
        });
      }
      return response.clone().json();
    } catch (err) {
      console.log(err);
    }
  });
};

export const getUserActivity = async (id) => {
  return fetch(`http://localhost:3000/user/${id}/activity`).then((res) => {
    if (res.status >= 400) {
      return res.text().then((text) => {
        throw new Error("Server responds with error!");
      });
      //if (!response.ok) {
      //throw new Error(`HTTP error ${response.status}`);
    } else {
      return res.json();
    }
  });
};

export const getUserAverage = async (id) => {
  return fetch(`http://localhost:3000/user/${id}/average-sessions`).then(
    (res) => {
      if (res.status >= 400) {
        return res.text().then((text) => {
          throw new Error("Server responds with error!");
        });
        //if (!response.ok) {
        //throw new Error(`HTTP error ${response.status}`);
      } else {
        // console.log("la reponse st "+res.json())
        return res.clone().json();
      }
    }
  );
};

export const getUserPerformance = async (id) => {
  return fetch(`http://localhost:3000/user/${id}/performance`).then(
    (res) => {
      if (res.status >= 400) {
        return res.text().then((text) => {
          throw new Error("Server responds with error!");
        });
        //if (!response.ok) {
        //throw new Error(`HTTP error ${response.status}`);
      } else {
        // console.log("la reponse st "+res.json())
        return res.clone().json();
      }
    }
  );
};
