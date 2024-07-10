import Header from '@/components/header';
import { LoginForm } from './login-form';
import { Suspense } from 'react';

export default async function LoginPage() {
  return (
    <>
      {/* <Header /> */}

      <section className='flex min-h-[100dvh] items-center justify-center bg-[#ff9f43] px-4 py-12 sm:px-6 lg:px-8'>
        <div className='container mx-auto px-6 py-12 h-full flex justify-center items-center'>
          <div className='md:w-[546px] lg:w-5/12 bg-white px-8 py-10 rounded-md'>
            <Suspense fallback={<>Loading...</>}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
