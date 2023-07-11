import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-xl font-semibold mb-8">
        The best food.
        <br />
        <span className="text-yellow-500">
          Straight out of our kitchen, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
