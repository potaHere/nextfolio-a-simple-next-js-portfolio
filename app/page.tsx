import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.instagram} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Full Stack Developer!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi there! I am Ja'far Shodiq, a passionate and dedicated Full Stack Developer
          with expertise in cloud computing, machine learning, web development, and design.
        </p>
        <p>
          I thrive on creating efficient, scalable, and user-friendly applications that
          leverage modern technologies. My work focuses on delivering clean code and
          intuitive interfaces that make an impact.
        </p>
        <p>
        Connect with me on{" "}
          <a href="https://github.com/potaHere" target="_blank">
            GitHub
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/ja-far-shodiq-669a67222" target="_blank">
            Linkedin
          </a>{" "}
          to explore my projects or get in touch!
        </p>
      </div>
    </section>
  );
}
