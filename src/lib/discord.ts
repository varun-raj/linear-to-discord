import { env } from "@/config/env"
import axios from "axios"

export const sendMessage = (message: string) => {
  return axios({
    url: env.DISCORD_WEBHOOK,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { content: message },
  }).then((res) => res.data)
}