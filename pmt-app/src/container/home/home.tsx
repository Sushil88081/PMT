import axios from "axios"
const Home = () => {
 const Get=axios.get("https://jsonplaceholder.typicode.com/unknown-endpoint");
console.log("get method",Get)


  return (
    <div>Home</div>
  )
}

export default Home