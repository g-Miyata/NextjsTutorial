import { auth, currentUser } from "@clerk/nextjs/server";
const DashboardPage = async () => {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log({ authObj, userObj });
  return <h1>Dashboard Page</h1>;
};

export default DashboardPage;
