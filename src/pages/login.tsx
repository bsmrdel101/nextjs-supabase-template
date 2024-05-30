import { Layout } from "@/components/Layout";
import Button from "@/components/Library/Button";
import Input from "@/components/Library/Input";
import { loginUser } from "@/scripts/controllers/userController";
import Link from "next/link";
import { FormEvent, useState } from "react";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await loginUser({ email, password });
  };


  return (
    <Layout title="Login">
      <div className="login">
        <h1>Login</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            variant={['label-stack']}
            label="Email"
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            variant={['label-stack']}
            label="Password"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>

        <div className="login__links">
          <Link href="/register">Register</Link>
          <Link href="/reset-password">Forgot Password?</Link>
        </div>
      </div>
    </Layout>
  );
}
