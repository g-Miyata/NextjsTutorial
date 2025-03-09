import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
