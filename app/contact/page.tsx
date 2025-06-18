"use client";
import React from 'react';
import { Card, CardHeader, CardFooter, Divider, Link, Image } from "@heroui/react";
import { GithubIconBig } from '@/components/icons';

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-24 text-center">Connect With Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* LinkedIn */}
        <Card className="max-w-[350px] w-full">
          <CardHeader className="flex gap-3">
            <Image alt="Linkedin Logo" height={35} radius="sm" src="/linkedin-logo.png" width={40} />
            <div className="flex flex-col">
              <p className="text-xl font-sans">LinkedIn</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.linkedin.com/in/raghav-bhargava3235">
              Visit My LinkedIn Profile.
            </Link>
          </CardFooter>
        </Card>

        {/* GitHub */}
        <Card className="max-w-[350px] w-full">
          <CardHeader className="flex gap-3">
            <GithubIconBig className="text-default-800" />
            <div className="flex flex-col">
              <p className="text-xl font-sans">GitHub</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/RaghavB333">
              Visit My GitHub Profile.
            </Link>
          </CardFooter>
        </Card>

        {/* Gmail */}
        <Card className="max-w-[350px] w-full">
          <CardHeader className="flex gap-3">
            <Image alt="Gmail Logo" height={40} radius="sm" src="/gmail.png" width={40} />
            <div className="flex flex-col">
              <p className="text-xl font-sans">Gmail</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="mailto:raghavbhargava3@gmail.com?subject=Hello Raghav&body=Hi Raghav,%0D%0AI found your portfolio and wanted to reach out..."
            >
              Send Me an Email
            </Link>
          </CardFooter>
        </Card>

        {/* Instagram */}
        <Card className="max-w-[350px] w-full">
          <CardHeader className="flex gap-3">
            <Image alt="Instagram Logo" height={40} radius="sm" src="/instagram.jpg" width={40} />
            <div className="flex flex-col">
              <p className="text-xl font-sans">Instagram</p>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.instagram.com/raghavb3786/">
              Visit My Instagram Profile.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
