import type { NextApiRequest, NextApiResponse } from "next";
import { mockApiRequest } from "../../../lib/mockApiRequest";

const featureFlagsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (!req.method || !["GET"].includes(req.method))
    return res.status(405).end();

  try {
    const { data } = await mockApiRequest({
      delayInSeconds: 1,
      data: {
        "ab-test-image": true,
      },
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch feature flags" });
  } finally {
    res.end();
  }
};

export default featureFlagsHandler;
