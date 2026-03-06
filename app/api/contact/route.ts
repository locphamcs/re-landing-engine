import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, need } = await req.json();

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { success: false, message: "Thiếu họ tên hoặc số điện thoại" },
        { status: 400 },
      );
    }

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzPfulb48UusQH71slmZSo-jWELJ4Hc6QilDwz3l-SLqtY2BAAtX_CI8vWPMOUytva0Ug/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          demand: need,
        }),
      },
    );

    const text = await response.text();

    return NextResponse.json({
      success: true,
      message: "Gửi thành công",
      raw: text,
    });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Có lỗi khi gửi form" },
      { status: 500 },
    );
  }
}
