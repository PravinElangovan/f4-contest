import { useState, useEffect } from 'react';
import { login, getUserById } from './Api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(username, password);

      if (response.statusCode === 200) {
        localStorage.setItem('user', JSON.stringify(response.user));
        setUser(response.user);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError('An error occurred',error);
      console.log(error)
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user && user.id) {
        try {
          const response = await getUserById(user.id);

          if (response.statusCode === 200) {
            localStorage.setItem('user', JSON.stringify(response.user));
            setUser(response.user);
          } else {
            setError(response.message);
          }
        } catch (error) {
          setError('An error occurred');
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    
  };

  if (!user) {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Login;
