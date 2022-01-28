import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../data/data.js'
/**
 * This function will return a json with the global data
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} json - The Json data from the user
 */
export const getInfosUserMocked = (id) => {

     let response =USER_MAIN_DATA
    .filter(user => user.id === Number(id)).shift();
    return {data: response}
}

/**
 * This function will return a json with the activity data
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} json - The Json activity data from the user
 */
export const getUserActivityMocked = (id) =>{
    let response = USER_ACTIVITY
    .filter(user=>user.userId === Number(id)).shift();
    return {data: response}
}

/**
 * This function will return a json with all activity session
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} json - The Json activity session from the user
 */
export const getUserAverageMocked =(id)=>{
    let response = USER_AVERAGE_SESSIONS
    .filter(user=>user.userId === Number(id)).shift();
    return {data: response}
}

/**
 * This function will return a json with all the performance
 * from a user with a id
 * @param {int} id - The id of the user
 * @returns {Object} The Json performance from the user
 */

export const getUserPerformanceMocked =(id) =>{
    let response = USER_PERFORMANCE
    .filter(user=>user.userId === Number(id)).shift();
    return {data: response}
}