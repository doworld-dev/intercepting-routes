import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Intercepting routes</h1>
      <Link href="/photos">Photo List</Link>
    </div>
  );
};

export default HomePage;
