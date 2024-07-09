'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
    try {
      setSubmitting(true);

      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        redirectTo: callbackUrl,
      });

      setSubmitting(false);

      if (!res?.error) {
        toast.success('successfully logged in');
        router.push(callbackUrl);
      } else {
        reset({ password: '' });
        const message = 'invalid email or password';
        toast.error(message);
        setError(message);
      }
    } catch (error: any) {
      toast.error(error.message);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const input_style =
    'form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {error && (
        <p className='text-center bg-red-300 py-4 mb-6 rounded'>{error}</p>
      )}
      <div className='mb-6'>
      <Label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </Label>
      

<Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="m@example.com"
              className={`mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-[#ff9f43] focus:outline-none focus:ring-[#ff9f43] `}
            />
            
        {errors['email'] && (
          <span className='text-red-500 text-xs pt-1 block'>
            {errors['email']?.message as string}
          </span>
        )}
      </div>
      <div className='mb-6'>
      <Label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </Label>
              <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder='Password'
              className={`mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-[#ff9f43] focus:outline-none focus:ring-[#ff9f43] `}
            />
       
        {errors['password'] && (
          <span className='text-red-500 text-xs pt-1 block'>
            {errors['password']?.message as string}
          </span>
        )}
      </div>
      <button
        type='submit'
        className='bg-[#ff9f43] hover:bg-[#f39c12] inline-block px-7 py-3 text-white font-semibold text-secondary-foreground hover:shadow-lg rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9f43] focus:ring-offset-2 w-full'
        disabled={submitting}
      >
        {submitting ? 'loading...' : 'Sign In'}
      </button>

    

      <div className='flex items-center my-4 text-gray-400 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
        <p className='text-center font-regular mx-4 mb-0'>OR</p>
      </div>

      <Link
        className='bg-gray-200 px-7 py-2 text-gray-600 font-regular text-sm rounded w-full flex justify-center items-center mb-3'
        
        onClick={() => signIn('google', { callbackUrl })}
        role='button' href={''}      >
        <Image
          className='pr-2'
          src='/images/google.svg'
          alt=''
          style={{ height: '2rem' }}
          width={35}
          height={35}
        />
        Continue with Google
      </Link>
     
    </form>
  );
};
