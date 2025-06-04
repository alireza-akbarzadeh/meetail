'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { OctagonAlertIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { PasswordInput } from '@/components/common/password-input';
import { toast } from 'sonner';
import {GoogleButton} from "@/modules/auth/ui/google-button";
import {GithubButton} from "@/modules/auth/ui/github-button";

const signUpSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is Required' }).max(255),
    email: z.string().email(),
    password: z.string().min(1, { message: 'password is required' }),
    confirmPassword: z.string().min(1, { message: 'confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password does not match',
    path: ['confirmPassword'],
  });

export function SignUpView() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
  });

  const onSignUp = (data: z.infer<typeof signUpSchema>) => {
    setError(null);
    setIsLoading(true);
    authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          router.push('/');
          setIsLoading(false);
          toast.success('Account created successfully');
        },
        onError: ({ error }) => {
          setError(error.message);
          setIsLoading(false);
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...signUpForm}>
            <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Let&#39;s get started</h1>
                  <p className="text-muted-foreground text-balance">Create your account</p>
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={signUpForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="name" placeholder="alireza.akbarzadeh" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    name="name"
                  />
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={signUpForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="m@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    name="email"
                  />
                </div>
                <div className="grid gap-3">
                  <PasswordInput
                    label="password"
                    name="password"
                    placeholder="********"
                    control={signUpForm.control}
                  />
                </div>
                <div className="grid gap-3">
                  <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="********"
                    control={signUpForm.control}
                  />
                </div>
                {error && (
                  <Alert className="bg-destructive/10 border-none">
                    <OctagonAlertIcon className="!text-destructive size-4" />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}
                <Button loading={isLoading} type="submit">
                  Login
                </Button>
                <div className="relative text-center text-sm">
                  <div className="border-muted-foreground absolute inset-0 top-1/2 z-0 border-t"></div>
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <GoogleButton setLoading={setIsLoading} isLoading={isLoading} setError={setError} />
                  <GithubButton setLoading={setIsLoading} isLoading={isLoading} setError={setError}  />
                </div>
                <div className="text-center text-sm">
                  Already have an account?{' '}
                  <Link href="/sign-in" className="underline underline-offset-4">Sign in</Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="hidden flex-col items-center justify-center gap-y-4 bg-radial from-green-500 to-green-800 md:flex">
            <img src="/logo.svg" alt="image" className="h-[92px] w-[92px]" />
            <p className="text-2xl font-semibold text-white">Meet.AI</p>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#"> Terms of services</a> and
        <a href="#" className="pl-1">
          Privacy Policy.
        </a>
      </div>
    </div>
  );
}
