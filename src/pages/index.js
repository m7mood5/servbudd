import AppStore from "@/Components/appStore";
import Hero from "@/Components/Hero/Hero";
import Users from "@/Components/Swwiper/Users";

export default function Home(props) {
  return (
    <>
      <Hero />
      <Users users={props.users} />
      <AppStore />
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users")
  const users = await res.json()
  return {
    props: {
      users: users
    }
  }
}