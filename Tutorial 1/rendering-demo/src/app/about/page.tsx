import { cookies } from 'next/headers';
const AboutPage = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);
  console.log('About server component');
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
};

export default AboutPage;
