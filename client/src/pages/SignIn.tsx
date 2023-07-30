import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/v1/signin", {
        email: email,
        password: password,
      });

      if (response.data.token) { // Only check for the token property
        localStorage.setItem("jwtToken", response.data.token);
        setPassword("");
        setEmail("");
        window.location.href = "/"; // Redirect to the desired page after successful login
      } else {
        setPassword("");
        setEmail("");
      }
    } 
    catch (error) {
        console.log(error);
        alert("Invalid email or password or something went wrong");
    }
  }

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black">Sign In</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="false"
              name="hidden"
              style={{ display: "none" }}
            />
            <input
              name="_redirect"
              type="hidden"
              value="https://jamstacker.studio/thankyou"
            />
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-gray-600"
                  htmlFor="password"
                >
                  Email
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="user@address.com"
                  autoComplete="off"
                  //type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-gray-600"
                  htmlFor="confirmPassword"
                >
                  Password
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
