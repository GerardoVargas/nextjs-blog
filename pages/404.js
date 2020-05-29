import Link from "next/link";

// pages/404.js
export default function Custom404() {
    return (
        <div>
            <h1>404 - Upps!!!... La página solicitada no existe</h1>
            <h2>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </h2>
        </div>

    )
  }
  