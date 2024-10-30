import logo from "../../../public/logo.png";
import Image from "next/image";
import { FormSingIn } from "@/components/form-singin";

export default function Login() {
  
  return (
    <main className="grid grid-cols-2 w-full h-full items-center gap-4">
      <div className="bg-zinc-800 w-full ">
        <Image
          src={logo} alt="logo"
        />
      </div>
      
      <div>
        <h1>Login</h1>
        <FormSingIn/>
      </div>
    </main>
  );
}
