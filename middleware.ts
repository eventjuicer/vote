export { auth as middleware } from "@/auth"

export const config = {
    unstable_allowDynamic: [
      '/emails/*', 
    ],
  }