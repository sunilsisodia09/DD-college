import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzJ1YfhSOSts7goK8z9XQdZDS08jlN7STXT4YM-R5nGkS1tTAlDcQAzki8wUoXJdxNd/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const applicationData = {
      stu_name: data.stu_name || "",
      email: data.email || "",
      mobile: data.mobile || "",
      mobile2: data.mobile2 || "",
      course_id: data.course_id || "",
      databy: data.databy || "Website",
      source_id: data.source_id || "DD College Website",
      school_name: data.school_name || "",
      stream: data.stream || "",
      city: data.city || "",
      state: data.state || "",
      country: data.country || "India",
      remarks: data.remarks || "",
    };

    console.log(
      "APPLICATION API RECEIVED DATA:",
      applicationData
    );

    const googleResponse = await fetch(
      GOOGLE_SCRIPT_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
        cache: "no-store",
      }
    );

    const responseText = await googleResponse.text();

    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      result = {
        success: googleResponse.ok,
        message: responseText,
      };
    }

    if (!googleResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            result?.message ||
            "Google Sheet submission failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          result?.message ||
          "Application submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "APPLICATION API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit application. Please try again.",
      },
      { status: 500 }
    );
  }
}