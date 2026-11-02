import { axiosInstance as axios } from "./axiosInstance";

const GET_ALL_EXERCISES = () => "/exercise";

export const getAllExercises = () => {
    return axios.get(GET_ALL_EXERCISES());
}