"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { supabase } from "@/lib/supabaseClient";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  
  const handleEmailLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });
      if (error) {
        console.error("Login error:", error.message);
        alert(error.message);
        return;
      }
      console.log("Logged in user:", data.user);
      router.push("/");
    } catch (err) {
      console.error("Unexpected login error:", err);
    }
  };

  const handleEmailSignup = async () => {
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,
      });
      if (error) {
        console.error("Signup error:", error.message);
        alert(error.message);
        return;
      }
      console.log("Sign up success:", data.user);
      alert("Check your email for a confirmation link!");
    } catch (err) {
      console.error("Unexpected signup error:", err);
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://yoursite.com/",
      },
    });
    if (error) {
      console.error("Google sign-in error:", error.message);
      alert(error.message);
    }
  };

  const handleAppleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "apple",
      options: {
        redirectTo: "https://yoursite.com/",
      },
    });
    if (error) {
      console.error("Apple sign-in error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="max-h-screen mt-16 mb-20">
      <div className="h-auto min-h-[500px] w-full flex items-center justify-center">
        <Tabs defaultValue="login" className="flex flex-col w-full max-w-md ">
          <TabsList>
            <TabsTrigger className="w-full" value="login">
              <span className="font-bold">Login</span>
            </TabsTrigger>
            <TabsTrigger className="w-full" value="signup">
              <span className="font-bold">Sign Up</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="h-full">
            <Card className="flex flex-col w-full max-w-md ">
              <CardHeader className="justify-center items-center space-y-5">
                <CardTitle className="text-2xl">Green Booker</CardTitle>

                {/* OAuth Buttons */}
                <Button onClick={handleGoogleSignIn} className="w-72 mb-4 bg-brand-primary">
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className="font-semibold ml-2">Sign in with Google</span>
                </Button>
                <Button onClick={handleAppleSignIn} className="w-72 bg-brand-primary">
                  <FontAwesomeIcon icon={faApple} />
                  <span className="font-semibold ml-2">Sign in with Apple</span>
                </Button>
              </CardHeader>

              <div className="flex items-center justify-center w-full space-x-2 py-4">
                <Separator className="w-1/3" />
                <span className="text-gray-500">or</span>
                <Separator className="w-1/3" />
              </div>

              {/* Email/Password Fields */}
              <CardContent className="mx-6 p-4 flex flex-col justify-center items-center space-y-4">
                <div>
                  <Label htmlFor="email">
                    <span className="font-semibold">Email</span>
                  </Label>
                  <Input
                    id="email"
                    placeholder="Your email address"
                    className="w-72"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="password">
                    <span className="font-semibold">Password</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    className="w-72"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
              </CardContent>

              <CardFooter className="justify-center mt-4">
                <Button onClick={handleEmailLogin} className="w-72 bg-brand-primary">
                  <span className="font-semibold">Sign In</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* ---------------- SIGN UP TAB ---------------- */}
          <TabsContent value="signup" className="h-full">
            <Card className="flex flex-col w-full max-w-md">
              <CardHeader className="justify-center items-center space-y-5">
                <CardTitle className="text-2xl">Green Booker</CardTitle>

                {/* OAuth Buttons */}
                <Button onClick={handleGoogleSignIn} className="w-72 mb-4 bg-brand-primary">
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className="font-semibold ml-2">Sign up with Google</span>
                </Button>
                <Button onClick={handleAppleSignIn} className="w-72 bg-brand-primary">
                  <FontAwesomeIcon icon={faApple} />
                  <span className="font-semibold ml-2">Sign up with Apple</span>
                </Button>
              </CardHeader>

              <div className="flex items-center justify-center w-full space-x-2 py-4">
                <Separator className="w-1/3" />
                <span className="text-gray-500">or</span>
                <Separator className="w-1/3" />
              </div>

              {/* Email/Password Fields */}
              <CardContent className="mx-6 p-4 flex flex-col justify-center items-center space-y-4">
                <div>
                  <Label htmlFor="email">
                    <span className="font-semibold">Email</span>
                  </Label>
                  <Input
                    id="email"
                    placeholder="Your email address"
                    className="w-72"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="password">
                    <span className="font-semibold">Password</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    className="w-72"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">
                    <span className="font-semibold">Confirm Password</span>
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    className="w-72"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  />
                </div>
              </CardContent>

              <CardFooter className="justify-center mt-4">
                <Button onClick={handleEmailSignup} className="w-72 bg-brand-primary">
                  <span className="font-semibold">Sign Up</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
