'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
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
    'form-control block w-full px-4 py-5  text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';

  return (



    <form className="space-y-4" onSubmit={handleSubmit(onSubmitHandler)}>
      {error && (
        <p className='text-center bg-red-300 py-4 mb-6 rounded'>{error}</p>
      )}
    <div>
      <Label htmlFor="email" className="block text-sm font-medium text-foreground">
        Email
      </Label>
      <Input
        id="email"
        {...register('password')}
        type="email"
        placeholder='Email address'        
        className={`mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-[#ff9f43] focus:outline-none focus:ring-[#ff9f43]`}
      />
      {errors['email'] && (
          <span className='text-red-500 text-xs pt-1 block'>
            {errors['email']?.message as string}
          </span>
        )}
    </div>

    <div>
      <div className="flex items-center justify-between">
        <Label htmlFor="password" className="block text-sm font-medium text-foreground">
          Password
        </Label>
        <Link href="#" className="text-sm text-[#ff9f43] hover:underline" prefetch={false}>
          Forgot password?
        </Link>
      </div>
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
    
    <Button
      type="submit"
      disabled={submitting}
      className="w-full bg-[#ff9f43] text-primary-foreground hover:bg-[#f39c12] focus:outline-none focus:ring-2 focus:ring-[#ff9f43] focus:ring-offset-2"
    >
      {submitting ? 'loading...' : 'Sign In'}
    
    </Button>

    <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
    <p className='text-center font-regular mx-4 mb-0 text-gray-400'>OR</p>
    </div>



<Link href={'/'}     >
<Button
        className='px-7 py-2 text-gray-600 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg hover:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-gray-200'
 
        onClick={() => signIn('google', { callbackUrl })}
        role='button'
        >
   
        <Image
          className='pr-2'
          src='/images/google.svg'
          alt=''
          style={{ height: '2rem' }}
          width={35}
          height={35}
        />
        Continue with Google
        </Button>
      </Link>



  </form>


  );
};
