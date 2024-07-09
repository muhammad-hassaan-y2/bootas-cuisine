import Header from '@/components/header';
import { LoginForm } from './login-form';
import { Suspense } from 'react';

export default async function LoginPage() {
  return (
    <>
      <Header />

      <section className='bg-ct-blue-600 min-h-screen pt-20 bg-orange-500'>
        <div className='container mx-auto px-6 py-12 h-full flex justify-center items-center'>
          <div className='md:w-8/12 lg:w-5/12 bg-white rounded-lg px-7 py-9'>
            <Suspense fallback={<>Loading...</>}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}

