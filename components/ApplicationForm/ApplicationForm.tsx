"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  AlertCircle,
} from "lucide-react";

import "./ApplicationForm.css";

/* =========================================================
   FORM DATA
========================================================= */

interface ApplicationData {
  stu_name: string;
  email: string;
  mobile: string;
  mobile2: string;
  course_id: string;
  databy: string;
  source_id: string;
  school_name: string;
  stream: string;
  city: string;
  state: string;
  country: string;
  remarks: string;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitMessage, setSubmitMessage] =
    useState("");

  const [isSuccess, setIsSuccess] =
    useState(false);

  /* =======================================================
     SUBMIT FORM
  ======================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");
    setIsSuccess(false);

    const form = event.currentTarget;

    try {
      /* ===================================================
         GET FORM DATA
      =================================================== */

      const formData = new FormData(form);

      const data: ApplicationData = {
        stu_name: String(
          formData.get("stu_name") || ""
        ).trim(),

        email: String(
          formData.get("email") || ""
        ).trim(),

        mobile: String(
          formData.get("mobile") || ""
        ).trim(),

        mobile2: String(
          formData.get("mobile2") || ""
        ).trim(),

        course_id: String(
          formData.get("course_id") || ""
        ).trim(),

        databy: String(
          formData.get("databy") || ""
        ).trim(),

        source_id: String(
          formData.get("source_id") || ""
        ).trim(),

        school_name: String(
          formData.get("school_name") || ""
        ).trim(),

        stream: String(
          formData.get("stream") || ""
        ).trim(),

        city: String(
          formData.get("city") || ""
        ).trim(),

        state: String(
          formData.get("state") || ""
        ).trim(),

        country: String(
          formData.get("country") || ""
        ).trim(),

        remarks: String(
          formData.get("remarks") || ""
        ).trim(),
      };

      /* ===================================================
         REQUIRED VALIDATION
      =================================================== */

      if (
        !data.stu_name ||
        !data.email ||
        !data.mobile ||
        !data.course_id ||
        !data.stream ||
        !data.city ||
        !data.state
      ) {
        setSubmitMessage(
          "Please fill in all required fields."
        );

        setIsSubmitting(false);
        return;
      }

      /* ===================================================
         NAME VALIDATION
      =================================================== */

      if (data.stu_name.length < 2) {
        setSubmitMessage(
          "Please enter a valid student name."
        );

        setIsSubmitting(false);
        return;
      }

      /* ===================================================
         MOBILE VALIDATION
      =================================================== */

      const cleanMobile =
        data.mobile
          .replace(/\D/g, "")
          .slice(0, 10);

      if (
        !/^[6-9]\d{9}$/.test(
          cleanMobile
        )
      ) {
        setSubmitMessage(
          "Please enter a valid 10-digit Indian mobile number."
        );

        setIsSubmitting(false);
        return;
      }

      /* ===================================================
         SECOND MOBILE
      =================================================== */

      let cleanMobile2 = "";

      if (data.mobile2) {
        cleanMobile2 =
          data.mobile2
            .replace(/\D/g, "")
            .slice(0, 10);

        if (
          !/^[6-9]\d{9}$/.test(
            cleanMobile2
          )
        ) {
          setSubmitMessage(
            "Please enter a valid alternate mobile number."
          );

          setIsSubmitting(false);
          return;
        }
      }

      /* ===================================================
         EMAIL VALIDATION
      =================================================== */

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailRegex.test(
          data.email
        )
      ) {
        setSubmitMessage(
          "Please enter a valid email address."
        );

        setIsSubmitting(false);
        return;
      }

      /* ===================================================
         PAYLOAD
         
         EXACT GOOGLE SHEET COLUMNS
      =================================================== */

      const payload = {
        stu_name: data.stu_name,

        email: data.email,

        mobile: cleanMobile,

        mobile2: cleanMobile2,

        course_id: data.course_id,

        databy:
          data.databy || "Website",

        source_id:
          data.source_id || "DD College Website",

        school_name:
          data.school_name,

        stream:
          data.stream,

        city:
          data.city,

        state:
          data.state,

        country:
          data.country || "India",

        remarks:
          data.remarks,
      };

      console.log(
        "Submitting application:",
        payload
      );

      /* ===================================================
         SEND TO NEXT.JS API
         
         Form
           ↓
         /api/application
           ↓
         Google Apps Script
           ↓
         Google Sheet
      =================================================== */

      const response = await fetch(
        "/api/application",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(
              payload
            ),
        }
      );

      /* ===================================================
         READ RESPONSE
      =================================================== */

      const result =
        await response.json();

      console.log(
        "Application API response:",
        result
      );

      /* ===================================================
         ERROR
      =================================================== */

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Application submission failed."
        );
      }

      /* ===================================================
         SUCCESS
      =================================================== */

      setIsSuccess(true);

      setSubmitMessage(
        "Thank you! Your application has been submitted successfully."
      );

      form.reset();

    } catch (error) {
      console.error(
        "Application submission error:",
        error
      );

      setIsSuccess(false);

      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your application right now. Please try again."
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div
      className="application-card"
      id="application"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="application-header">

        <span className="application-eyebrow">
          START YOUR JOURNEY
        </span>

        <h3>
          APPLICATION
          <br />
          <strong>FORM 2026</strong>
        </h3>

       

      </div>


      {/* =================================================
          FORM
      ================================================= */}

      <form
        onSubmit={handleSubmit}
        noValidate
      >

        {/* =================================================
            STUDENT NAME
        ================================================= */}

        <div className="form-field">

          <label htmlFor="stu_name">
            Student Name
            <span>*</span>
          </label>

          <input
            id="stu_name"
            type="text"
            name="stu_name"
            placeholder="ENTER STUDENT NAME"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            disabled={isSubmitting}
          />

        </div>


        {/* =================================================
            EMAIL + MOBILE
        ================================================= */}

        <div className="form-row">

          <div className="form-field">

            <label htmlFor="email">
              Email
              <span>*</span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="ENTER EMAIL"
              autoComplete="email"
              maxLength={150}
              required
              disabled={isSubmitting}
            />

          </div>


          <div className="form-field">

            <label htmlFor="mobile">
              Mobile
              <span>*</span>
            </label>

            <input
              id="mobile"
              type="tel"
              name="mobile"
              placeholder="10-DIGIT MOBILE"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              pattern="[6-9][0-9]{9}"
              required
              disabled={isSubmitting}
              onInput={(event) => {
                event.currentTarget.value =
                  event.currentTarget.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
              }}
            />

          </div>

        </div>


        {/* =================================================
            ALTERNATE MOBILE
        ================================================= */}

        <div className="form-field">

          <label htmlFor="mobile2">
            Alternate Mobile
            <span className="optional">
              OPTIONAL
            </span>
          </label>

          <input
            id="mobile2"
            type="tel"
            name="mobile2"
            placeholder="ALTERNATE MOBILE NUMBER"
            inputMode="numeric"
            maxLength={10}
            disabled={isSubmitting}
            onInput={(event) => {
              event.currentTarget.value =
                event.currentTarget.value
                  .replace(/\D/g, "")
                  .slice(0, 10);
            }}
          />

        </div>


        {/* =================================================
            COURSE
        ================================================= */}

        <div className="form-field">

          <label htmlFor="course_id">
            Select Course
            <span>*</span>
          </label>

          <div className="select-wrapper">

            <select
              id="course_id"
              name="course_id"
              defaultValue=""
              required
              disabled={isSubmitting}
            >

              <option
                value=""
                disabled
              >
                SELECT COURSE
              </option>

              <option value="BBA">
                BBA
              </option>

              <option value="BCA">
                BCA
              </option>

              <option value="B.Com">
                B.Com
              </option>

              <option value="BA">
                BA
              </option>

              <option value="B.Sc">
                B.Sc
              </option>

              <option value="MBA">
                MBA
              </option>

              <option value="MCA">
                MCA
              </option>

              <option value="M.Com">
                M.Com
              </option>

              <option value="Other">
                Other
              </option>

            </select>

            <ChevronDown
              size={16}
              aria-hidden="true"
            />

          </div>

        </div>


        {/* =================================================
            STREAM
        ================================================= */}

        <div className="form-field">

          <label htmlFor="stream">
            Stream
            <span>*</span>
          </label>

          <div className="select-wrapper">

            <select
              id="stream"
              name="stream"
              defaultValue=""
              required
              disabled={isSubmitting}
            >

              <option
                value=""
                disabled
              >
                SELECT STREAM
              </option>

              <option value="Management">
                Management
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="Commerce">
                Commerce
              </option>

              <option value="Arts">
                Arts
              </option>

              <option value="Science">
                Science
              </option>

              <option value="Other">
                Other
              </option>

            </select>

            <ChevronDown
              size={16}
              aria-hidden="true"
            />

          </div>

        </div>


        {/* =================================================
            SCHOOL NAME
        ================================================= */}

        <div className="form-field">

          <label htmlFor="school_name">
            School Name
            <span className="optional">
              OPTIONAL
            </span>
          </label>

          <input
            id="school_name"
            type="text"
            name="school_name"
            placeholder="ENTER SCHOOL NAME"
            maxLength={150}
            disabled={isSubmitting}
          />

        </div>


        {/* =================================================
            CITY + STATE
        ================================================= */}

        <div className="form-row">

          <div className="form-field">

            <label htmlFor="city">
              City
              <span>*</span>
            </label>

            <input
              id="city"
              type="text"
              name="city"
              placeholder="ENTER CITY"
              autoComplete="address-level2"
              maxLength={80}
              required
              disabled={isSubmitting}
            />

          </div>


          <div className="form-field">

            <label htmlFor="state">
              State
              <span>*</span>
            </label>

            <input
              id="state"
              type="text"
              name="state"
              placeholder="ENTER STATE"
              autoComplete="address-level1"
              maxLength={80}
              required
              disabled={isSubmitting}
            />

          </div>

        </div>


        {/* =================================================
            COUNTRY
        ================================================= */}

        <div className="form-field">

          <label htmlFor="country">
            Country
          </label>

          <input
            id="country"
            type="text"
            name="country"
            defaultValue="India"
            placeholder="ENTER COUNTRY"
            autoComplete="country-name"
            maxLength={80}
            disabled={isSubmitting}
          />

        </div>


        {/* =================================================
            DATA BY
        ================================================= */}

        <input
          type="hidden"
          name="databy"
          value="Website"
        />


        {/* =================================================
            SOURCE ID
        ================================================= */}

        <input
          type="hidden"
          name="source_id"
          value="DD College Website"
        />


        {/* =================================================
            REMARKS
        ================================================= */}

        <div className="form-field">

          <label htmlFor="remarks">
            Remarks
            <span className="optional">
              OPTIONAL
            </span>
          </label>

          <textarea
            id="remarks"
            name="remarks"
            rows={3}
            placeholder="WRITE YOUR MESSAGE"
            maxLength={500}
            disabled={isSubmitting}
          />

        </div>


        {/* =================================================
            SUBMIT
        ================================================= */}

        <button
          type="submit"
          className="application-submit"
          disabled={isSubmitting}
        >

          {isSubmitting ? (
            <>
              <Loader2
                size={17}
                className="submit-loader"
                aria-hidden="true"
              />

              <span>
                SUBMITTING...
              </span>
            </>
          ) : (
            <>
              <span>
                APPLY NOW
              </span>

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </>
          )}

        </button>


        {/* =================================================
            RESPONSE MESSAGE
        ================================================= */}

        {submitMessage && (
          <div
            className={`application-submit-message ${
              isSuccess
                ? "success"
                : "error"
            }`}
            role={
              isSuccess
                ? "status"
                : "alert"
            }
            aria-live="polite"
          >

            {isSuccess ? (
              <CheckCircle2
                size={18}
                aria-hidden="true"
              />
            ) : (
              <AlertCircle
                size={18}
                aria-hidden="true"
              />
            )}

            <span>
              {submitMessage}
            </span>

          </div>
        )}


        {/* =================================================
            NOTE
        ================================================= */}

        <p className="application-note">
          By submitting this form, you agree
          to be contacted by the D.D. College
          admission team.
        </p>

      </form>

    </div>
  );
}