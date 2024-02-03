import { NextResponse } from "next/server";

export const getErrorResponse = (msg, error, statusCode) =>
  NextResponse.json({ msg, error }, { status: statusCode });

export const getStatusBgColor = (status) => {
  switch (status.toLowerCase()) {
    case "done":
      return "green-status-bg";

    case "started":
      return "yellow-status-bg";

    case "not started":
      return "red-status-bg";

    default:
      return "default-status-bg";
  }
};
