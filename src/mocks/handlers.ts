import { rest } from "msw";

const EMAIL = "john@doe.com";
const PASSWORD = "test";
const TOKEN = "1234";
  
export const handlers = [
  rest.post<any>('/login', async (req, res, ctx) => {
    const { email, password } = await req.json();
    if (email === EMAIL && password === PASSWORD) {
      return res(
        ctx.json({
          token: TOKEN
        })
      )
    }
    return res(
      ctx.status(400),
      ctx.json({
        message: "Failed to login."
      })
    )
  }),
  rest.get<any>('/user', async (req, res, ctx) => {
    if (TOKEN) {
      return res(
        ctx.json({
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: EMAIL
        })
      )
    }
    return res(
      ctx.status(403),
      ctx.json({
        message: "Failed to fetch user data."
      })
    )
  }),
  rest.post<any>('/logout', async (req, res, ctx) => {
    if (TOKEN) {
      return res(
        ctx.json({
          message: 'Successful logout.'
        })
      )
    }
    return res(
      ctx.status(403),
      ctx.json({
        message: "Failed to logout."
      })
    )
  }),
];
