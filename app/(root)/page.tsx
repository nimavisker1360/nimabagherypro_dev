import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome to the World Next.js</h1>
      <form className="px-10 pt-[100px]"></form>
    </>
  );
};
export default Home;
