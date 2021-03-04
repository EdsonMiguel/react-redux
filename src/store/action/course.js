export const toggleLesson = (module, lesson) =>{
    return{
        type:'TOGGLE_LESSON',
        payload:{
            module,
            lesson
        }
    }
}