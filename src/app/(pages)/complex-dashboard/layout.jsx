export default function DashboardLayout({ children, users, revenue, notifications, login }) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>
        <div>{children}</div>
        <div className='flex flex-wrap'>
          <div className='flex flex-col'>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className='flex flex-1'>{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>{login}...</div>
    </>
  );
}
