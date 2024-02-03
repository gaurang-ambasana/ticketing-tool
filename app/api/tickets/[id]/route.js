import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params: { id } }) {
  try {
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Error", error }, { status: 500 });
  }
}
