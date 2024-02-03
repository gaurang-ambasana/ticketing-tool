import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("here");
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json(
      { msg: "Ticket Created", ticketData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "Error", error }, { status: 500 });
  }
}
