import { Link } from "react-router-dom";
import { Blocks, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@800&family=Inter:wght@400;600&display=swap');`}</style>

      <div
        style={{
          width: 48,
          height: 48,
          background: "#ccea4a",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        <Blocks size={22} color="#0a0a0a" />
      </div>

      <h1
        style={{
          fontSize: "clamp(4rem,10vw,7rem)",
          fontWeight: 800,
          color: "#f7f7f7",
          fontFamily: "Epilogue, sans-serif",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: 16,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: 17,
          color: "#666",
          marginBottom: 36,
          maxWidth: 320,
          lineHeight: 1.7,
        }}
      >
        This page doesn't exist. Let's get you back to somewhere useful.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "#ccea4a",
          color: "#0a0a0a",
          borderRadius: 8,
          padding: "12px 24px",
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        <ArrowLeft size={15} /> Back to Home
      </Link>
    </div>
  );
}
