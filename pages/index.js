import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const clickHandler = () => {
    console.log('Placing order');
    router.push('/product');
  };
  return (
    <div>
      <h1>Home page</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/product'>Product</Link>
      <button onClick={clickHandler}>Place order</button>
    </div>
  );
};

export default Home;
