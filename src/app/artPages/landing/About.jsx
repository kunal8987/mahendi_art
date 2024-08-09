import Link from "next/link";
import React from "react";
import logo from "../../art link/pic/profile.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <section id="about" className=" container overflow-hidden bg-red-300 sm:grid md:grid-flow-col">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-os font-bold sm:text-4xl">
              Hello I'm Roshani 🤗
              <p className="text-lg font-pop">Mehndi Artiest</p>
            </h2>

            <p className="mt-4 font-pop text-lg text-black">
              Mehndi art is a beautiful form of body art that has been practiced
              for centuries. It involves creating stunning designs on the skin
              using a paste made from the powdered leaves of the henna plant.
              This art form is often used for special occasions such as
              weddings, festivals, and celebrations, and is cherished for its
              cultural significance and aesthetic appeal.
            </p>
            <div className="mt-2 md:mt-3">
              <p className="mt-8 inline-block rounded px-12 py-3 text-md font-pop font-medium text-black ">
                For Mehndi Booking Connect With Me On Instagram:-
                <Link
                  className=" px-3 underline font-pop font-bold underline-offset-4"
                  href="https://www.instagram.com/mehendi_by_roshani18/"
                  target="_blank"
                >
                  JOIN
                </Link>
              </p>
            </div>
          </div>
        </div>

        <Image
          alt="profile"
          width={350}
          height={100}
          src={logo}
          className="object-cover rounded-2xl mt-5 mx-auto sm:mx-0 mb-5"
        />
      </section>
    </div>
  );
};

export default About;
