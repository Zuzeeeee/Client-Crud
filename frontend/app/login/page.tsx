const Login = () => {
  return (
    <div className='bg-[#151c2c] w-full h-screen flex items-center justify-center'>
      <div className='bg-[#182237] p-12 rounded '>
        <form className='p-12 flex flex-col items-center justify-center gap-8'>
          <h1>Login</h1>
          <input
            className='bg-[#151c2c] w-full p-6 rounded border-[#2e374a] border-2'
            type='text'
            placeholder='username'
            name='username'
          />
          <input
            className='bg-[#151c2c] w-full p-6 rounded border-[#2e374a] border-2'
            type='password'
            placeholder='password'
            name='password'
          />
          <button className='w-full p-8 bg-teal-700 cursor-pointer rounded text-white'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
