import axios from 'axios';

const ACHIEVEMENT_REST_API_URL  ="http://localhost:8080/teacher";

class AchievementService {
    getAchievement()
    {
        return axios.get(ACHIEVEMENT_REST_API_URL + '/getAllAchievement');
    }
    
    addAchievement(achievement){
        return axios.post(ACHIEVEMENT_REST_API_URL + '/addAchievement',achievement);
    }

    getAchievementById(id){
        return axios.get(ACHIEVEMENT_REST_API_URL + '/getAchievementById/'+ id)
    }

    updateAchievement(achievement, id)
    {
        return axios.put(ACHIEVEMENT_REST_API_URL + '/updateAchievement/' + id, achievement);
    }

    deleteAchievement(id)
    {
        return axios.delete(ACHIEVEMENT_REST_API_URL + '/deleteAchievement/' + id);
    }

    getAchievementByName(name)
    {
        return axios.get(ACHIEVEMENT_REST_API_URL + '/getAllAchievementByName/' + name);
    }
    
}
export default new AchievementService();