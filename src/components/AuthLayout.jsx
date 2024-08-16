import AuthImage from "./../assets/authImage/authImage.png";
import GoogleIcon from "./../assets/authImage/GoogleIcon.png";
import AppleIcon from "./../assets/authImage/AppleIcon.png";



function AuthLayout() {
  return (
    <section className="">
      <div className="flex justify-end absolute right-0 bottom-0 w-[800px] overflow-hidden">
        <img
          src={AuthImage}
          alt="Image of foliage"
          className="max-w-2xl h-full object-cover w-full "
        />
      </div>

      <section className="h-screen w-7/12 z-10 flex-col flex items-center justify-center">
        <form className="flex items-start justify-start flex-col">
          <div>
            <h1 className="text-3xl font-semibold py-2">Get Started Now</h1>
            <p className="text-base font-semibold pb-6">
              Enter your Credentials to access your account
            </p>
          </div>
          <label for="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="h-7 w-[420px] rounded-lg border pl-2 focus:outline-none border-slate-300 text-black text-xs"
            required
          />{" "}
          <br />
          <label for="email" className="text-sm font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="h-7 w-[420px] rounded-lg border pl-2 focus:outline-none border-slate-300 text-black text-xs"
            required
          />{" "}
          <br />
          <label for="password" className="text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="h-7 w-[420px] rounded-lg border pl-2 focus:outline-none border-slate-300 text-black text-xs"
            required
          />{" "}
          <div className="flex items-center py-5">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="w-3 mr-1"
              required
            />
            <label htmlFor="terms" className="text-xs font-medium">
              I agree to the <a href="" className="underline">terms & policy</a>
            </label>
          </div>
          <div className=" flex justify-center pt-6 pb-8 text-white">
            <button
              type="submit"
              className="bg-green h-auto w-[420px] text-sm font-bold p-1 rounded-lg border transition hover:bg-slate-200 hover:border-transparent hover:text-black ">
              Signup
            </button>
          </div>
        </form>


          <div className="flex flex-row items-center text-xs font-semibold pb-8">
            <div className="w-48 mx-auto border-t opacity-10"></div>
            <p>Or</p>
            <div className="w-48 mx-auto border-t opacity-10"></div>
          </div>


          <div className="space-x-4 flex">
             <button
              type="button"
              className="h-auto w-52 text-sm font-medium p-2 rounded-lg border border-slate-300 flex items-center justify-center transition hover:bg-slate-200 hover:border-transparent"><img src={GoogleIcon} alt="Google Icon" className="h-5 w-auto mr-2" /><span>Sign in with Google</span>
            </button>
             <button
              type="button"
              className="h-auto w-52 text-sm font-medium p-2 rounded-lg border border-slate-300 flex items-center justify-center transition hover:bg-slate-200 hover:border-transparent"><img src={AppleIcon} alt="Apple Icon" className="h-5 w-auto mr-2"/><span>Sign in with Apple</span>
            </button>
          </div>
          <div className="pt-5 text-sm font-semibold">
          <p>Have an account? <a href="/login" className="text-blue">Sign In</a></p>
          </div>

      </section>
    </section>
  );
}

export { AuthLayout };
