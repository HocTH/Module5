function Demo1() {

let courses =[{name:"tinh"}, {name:"Hoai"}, {name:"hoa"}]
    return (
        <ul>
            {courses.map((course)=>{
                return <li>{course.name}</li>
            })}
        </ul>
    )

}
export default Demo1;