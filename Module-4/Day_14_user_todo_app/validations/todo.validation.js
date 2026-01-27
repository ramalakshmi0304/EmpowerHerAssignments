export const validateTodo = ({title,userId})=>{
if(!userId||!title){
    return "Title and userId are required"
}
return null
}