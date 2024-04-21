import "./main.css";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* me */}
      <section className="section-me">
        <div className="image">
          <Image
            src="/images/me.webp"
            layout="responsive"
            width="375"
            height="500"
            alt="Min datter og meg"
          />
        </div>
        <div className="me"></div>
      </section>
    </main>
  );
}
