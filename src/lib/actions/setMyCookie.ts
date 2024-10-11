import { setCookie } from "cookies-next";

// set use data to cookie

export function setMyCookie(key: string, value: string) {
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

  setCookie(key, value, {
    expires
  })
}