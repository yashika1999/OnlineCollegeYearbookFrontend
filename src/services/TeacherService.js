import axios from 'axios';

const TEACHER_API_BASE_URL = "http://localhost:8080/registration/teacher";

class TeacherService {

    findAll(){
        return axios.get(TEACHER_API_BASE_URL);
    }

    createTeacher(teacher){
        return axios.post(TEACHER_API_BASE_URL, teacher);

    }

    getTeacherById(teacherId){
        return axios.get(TEACHER_API_BASE_URL + '/' + teacherId);
    }

    // updateTeacher(teacher,teacherId){
    //     return axios.put(TEACHER_API_BASE_URL + '/' + teacherId);
    // }

    // deleteTeacher(teacherId){
    //     return axios.delete(TEACHER_API_BASE_URL + '/' + teacherId);
    // }
}

export default new TeacherService()