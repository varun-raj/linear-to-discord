import type { NextApiRequest, NextApiResponse } from 'next';

import { ERRORS } from '@/config/appConstants';
import { sendMessage } from '@/lib/discord';
import { parseData } from '@/lib/linear';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const message = parseData(data);
  if (message === ERRORS.UNKNOWN_ACTION) {
    return res.json({ success: false, message: ERRORS.UNKNOWN_ACTION });
  }
  return sendMessage(message)
    .then(() => res.json({ success: true }))
    .catch((err) => res.json({ success: false, message: err.message }));
}
