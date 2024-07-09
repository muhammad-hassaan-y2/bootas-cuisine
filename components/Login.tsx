"use client"
import { useState } from "react";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Define the Zod schema for form validation
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function Component() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const handleSignIn = () => {
    const validationResult = signInSchema.safeParse(formData);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten();
      setFormErrors({
        email: errors.fieldErrors.email?.[0] || "",
        password: errors.fieldErrors.password?.[0] || "",
      });
      return;
    }

    // Form validation passed, navigate to home
    router.push('/home');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#ff9f43] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-lg bg-background p-6 shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <span className="ml-2 text-2xl font-bold">Logo</span>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="m@example.com"
              className={`mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-[#ff9f43] focus:outline-none focus:ring-[#ff9f43] ${formErrors.email ? "border-red-500" : ""}`}
            />
            {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
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
              value={formData.password}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-[#ff9f43] focus:outline-none focus:ring-[#ff9f43] ${formErrors.password ? "border-red-500" : ""}`}
            />
            {formErrors.password && <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>}
          </div>
          <Button
            type="button"
            onClick={handleSignIn}
            className="w-full bg-[#ff9f43] text-primary-foreground hover:bg-[#f39c12] focus:outline-none focus:ring-2 focus:ring-[#ff9f43] focus:ring-offset-2"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}