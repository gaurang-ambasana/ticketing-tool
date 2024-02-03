import Ticket from "@/app/(models)/Ticket";
import { getErrorResponse } from "@/app/(utils)";
import { NextResponse } from "next/server";

export async function DELETE(_, { params: { id } }) {
  try {
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return getErrorResponse("Error", error, 500);
  }
}

export async function GET(_, { params: { id } }) {
  try {
    const ticketData = await Ticket.findById(id);
    return NextResponse.json({ ticketData }, { status: 200 });
  } catch (error) {
    return getErrorResponse("Error", error, 500);
  }
}

export async function PUT(req, { params: { id } }) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    const updatedTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json(
      { msg: "Ticket Updated!!!", updatedTicketData },
      { status: 200 }
    );
  } catch (error) {
    return getErrorResponse("Error", error, 500);
  }
}
