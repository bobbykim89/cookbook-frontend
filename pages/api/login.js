import cookie from 'cookie';
import client from '@/config/apolloClient';
import { LOGIN_USER } from '@/queries/userMutation';

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await client.mutate({
      mutation: LOGIN_USER,
      variables: {
        input: {
          identifier: email,
          password: password,
        },
      },
    });
    const info = await data.login;
    console.log(info.jwt);

    if (!error) {
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', info.jwt, {
          httpOnly: true,
          secure: process.env.Node_ENV !== 'development',
          maxAge: 60 * 60 * 24, // 1 day
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json({ user: info.user, error: null });
    }
  } catch (error) {
    res
      .status(error.statusCode)
      .json({ message: error.message[0].messages[0].message });
  }
};

export default login;
